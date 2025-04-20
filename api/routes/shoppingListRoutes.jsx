import express from 'express';
import {
  getAllItems,
  createItem,
  getItem,
  updateItem,
  deleteItem
} from '../controllers/shoppingListController.jsx';

const router = express.Router();

router.get('/items', getAllItems);
router.post('/items', createItem);
router.get('/items/:id', getItem);
router.put('/items/:id', updateItem);
router.delete('/items/:id', deleteItem);

export default router;