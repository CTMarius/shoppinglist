const API_BASE_URL = 'http://localhost:3000/api';

export const api = {
  async getAllItems() {
    if (!navigator.onLine) {
      throw new Error('Offline');
    }
    const response = await fetch(`${API_BASE_URL}/items`);
    if (!response.ok) throw new Error('Failed to fetch items');
    return response.json();
  },

  async createItem(item) {
    if (!navigator.onLine) {
      // Store in localStorage and mark for sync
      const items = JSON.parse(localStorage.getItem('shoppingList') || '[]');
      const newItem = { ...item, id: Date.now(), pendingSync: true };
      items.push(newItem);
      localStorage.setItem('shoppingList', JSON.stringify(items));
      return newItem;
    }
    
    const response = await fetch(`${API_BASE_URL}/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });
    if (!response.ok) throw new Error('Failed to create item');
    return response.json();
  },

  async updateItem(id, updates) {
    const response = await fetch(`${API_BASE_URL}/items/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updates),
    });
    if (!response.ok) throw new Error('Failed to update item');
    return response.json();
  },

  async deleteItem(id) {
    const response = await fetch(`${API_BASE_URL}/items/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete item');
    return response.json();
  },
};