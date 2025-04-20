import React, { useState, useEffect } from 'react';
import './App.css';
import Groceries from './components/groceries.jsx';
import { fetchListData } from "./handlers/listData.jsx";

export default function App() {
  const [groceries, setGroceries] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState(() => {
    // Initialize items from localStorage
    const savedItems = localStorage.getItem('shoppingList');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchListData();
      setGroceries(data);
    };

    fetchData();
  }, []);

  // Save to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem('shoppingList', JSON.stringify(items));
  }, [items]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem.trim()) return; // Prevent empty items
    const newItemObject = { 
      id: Date.now(), 
      name: newItem,
      createdAt: new Date().toISOString()
    };
    setItems([...items, newItemObject]);
    setNewItem('');
  };

  const handleRemove = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="app-container">
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
            <div key={item.id} className="list-item">
              <span>{item.name}</span>
              <button
                className="remove-button"
                onClick={() => handleRemove(item.id)}
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