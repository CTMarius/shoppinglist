import React, { useState, useEffect } from 'react';
import './App.css';
import { api } from './services/api';

export default function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [loading, setLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(true);
  const [error, setError] = useState(null);

  // Fetch items on component mount and handle online/offline status
  useEffect(() => {
    fetchItems();
    
    // Add online/offline event listeners
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Check initial online status
    setIsOnline(navigator.onLine);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleOnline = () => {
    setIsOnline(true);
    fetchItems(); // Re-fetch items when we're back online
  };

  const handleOffline = () => {
    setIsOnline(false);
  };

  const fetchItems = async () => {
    try {
      setLoading(true);
      const data = await api.getAllItems();
      setItems(data);
      localStorage.setItem('shoppingList', JSON.stringify(data));
      setError(null);
    } catch (err) {
      setError('Failed to fetch items');
      setIsOnline(false);
      // Fall back to localStorage
      const savedItems = localStorage.getItem('shoppingList');
      if (savedItems) setItems(JSON.parse(savedItems));
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newItem.trim()) return;

    const itemData = {
      name: newItem,
      createdAt: new Date().toISOString(),
    };

    try {
      const savedItem = await api.createItem(itemData);
      setItems([...items, savedItem]);
      // Update localStorage
      localStorage.setItem('shoppingList', JSON.stringify([...items, savedItem]));
      setNewItem('');
    } catch (err) {
      setError('Failed to add item');
    }
  };

  const handleRemove = async (id) => {
    try {
      await api.deleteItem(id);
      const updatedItems = items.filter(item => item._id !== id);
      setItems(updatedItems);
      // Update localStorage
      localStorage.setItem('shoppingList', JSON.stringify(updatedItems));
    } catch (err) {
      setError('Failed to delete item');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="app-container">
      <div className={`connection-status ${isOnline ? 'online' : 'offline'}`}>
        {isOnline ? 'Connected to server' : 'Offline Mode - Using Local Storage'}
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
        <h2>Shopping List</h2>
        <div className="grocery-list">
          {items.map((item) => (
            <div key={item._id} className="list-item">
              <span>{item.name}</span>
              <button
                className="remove-button"
                onClick={() => handleRemove(item._id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}