import ShoppingList from '../models/shoppingListModel.jsx';

export const getAllItems = async (req, res) => {
  try {
    const items = await ShoppingList.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createItem = async (req, res) => {
  const item = new ShoppingList({
    name: req.body.name
  });

  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getItem = async (req, res) => {
  try {
    const item = await ShoppingList.findById(req.params.id);
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateItem = async (req, res) => {
  try {
    const item = await ShoppingList.findById(req.params.id);
    if (item) {
      item.name = req.body.name || item.name;
      item.completed = req.body.completed ?? item.completed;
      
      const updatedItem = await item.save();
      res.json(updatedItem);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteItem = async (req, res) => {
  try {
    const item = await ShoppingList.findById(req.params.id);
    if (item) {
      await item.remove();
      res.json({ message: 'Item deleted' });
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};