import React, { useState, useEffect } from 'react';
import './App.css';
import { api } from './services/api';

export default function App() {
  // Initialize items from localStorage first
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('shoppingList');
    return savedItems ? JSON.parse(savedItems) : [];
  });
  const [newItem, setNewItem] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [error, setError] = useState(null);

  // Sync with server when online
  useEffect(() => {
    const syncWithServer = async () => {
      if (navigator.onLine) {
        try {
          setLoading(true);
          const data = await api.getAllItems();
          setItems(data);
          localStorage.setItem('shoppingList', JSON.stringify(data));
          setError(null);
          setIsOnline(true);
        } catch (err) {
          setError('Server sync failed - using local data');
          setIsOnline(false);
        } finally {
          setLoading(false);
        }
      }
    };

    window.addEventListener('online', syncWithServer);
    window.addEventListener('offline', () => setIsOnline(false));

    // Initial sync attempt
    syncWithServer();

    return () => {
      window.removeEventListener('online', syncWithServer);
      window.removeEventListener('offline', () => setIsOnline(false));
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newItem.trim()) return;

    const newItemData = {
      id: Date.now(),
      name: newItem,
      createdAt: new Date().toISOString()
    };

    // Update local state and storage immediately
    const updatedItems = [...items, newItemData];
    setItems(updatedItems);
    localStorage.setItem('shoppingList', JSON.stringify(updatedItems));
    setNewItem('');

    // Try to sync with server if online
    if (navigator.onLine) {
      try {
        await api.createItem(newItemData);
      } catch (err) {
        setError('Failed to sync with server - changes saved locally');
      }
    }
  };

  const handleRemove = async (id) => {
    // Update local state and storage immediately
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem('shoppingList', JSON.stringify(updatedItems));

    // Try to sync with server if online
    if (navigator.onLine) {
      try {
        await api.deleteItem(id);
      } catch (err) {
        setError('Failed to sync deletion with server');
      }
    }
  };

  return (
    <div className="app-container">
      <div className={`connection-status ${isOnline ? 'online' : 'offline'}`}>
        {isOnline ? 'Connected to server' : 'Offline Mode - Using Local Storage'}
        {error && <div className="error-message">{error}</div>}
      </div>

      <div className="input-section">
        <h2>Add New Item</h2>
        <form className="input-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-field"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Enter item name"
          />
          <button type="submit" className="add-button">
            Add Item
          </button>
        </form>
      </div>
      
      <div className="list-section">
        <h2>Shopping List {loading && <span className="loading-indicator">Syncing...</span>}</h2>
        <div className="grocery-list">
          {items.length === 0 ? (
            <div className="empty-list">No items in your list</div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="list-item">
                <span>{item.name}</span>
                <button
                  className="remove-button"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}