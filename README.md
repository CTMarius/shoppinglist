# Shopping List Application

A modern React-based shopping list application with MongoDB backend and local storage support.

## Project Structure

```
├── api/
│   ├── controllers/
│   │   └── shoppingListController.jsx    # API business logic
│   ├── models/
│   │   └── shoppingListModel.jsx         # MongoDB schema
│   └── routes/
│       └── shoppingListRoutes.jsx        # API endpoints
├── src/
│   ├── components/
│   │   ├── add.jsx                      # Add item form
│   │   ├── groceries.jsx                # List container
│   │   ├── listItem.jsx                 # Item component
│   │   └── remove.jsx                   # Remove button
│   ├── handlers/
│   │   └── listData.jsx                 # Data fetching logic
│   ├── App.jsx                          # Main component
│   └── index.jsx                        # Entry point
└── server.jsx                           # Express server
```

## Features

### Frontend
- React 18 with Hooks for state management
- Persistent storage using localStorage
- Responsive grid layout design
- Real-time updates
- Client-side validation

### Backend
- RESTful API using Express.js
- MongoDB integration with Mongoose
- CRUD operations for shopping list items
- Structured MVC architecture

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/items` | GET | Retrieve all items |
| `/api/items` | POST | Create new item |
| `/api/items/:id` | GET | Get specific item |
| `/api/items/:id` | PUT | Update item |
| `/api/items/:id` | DELETE | Remove item |

## Data Storage

### MongoDB Schema
```javascript
{
  name: String,       // Item name
  createdAt: Date,    // Creation timestamp
  completed: Boolean  // Item status
}
```

### Local Storage
- Maintains list state between page refreshes
- Syncs with backend database
- Automatic saving on item changes

## Setup

### Prerequisites
- Node.js >= 16
- MongoDB >= 5.0
- npm or yarn

### Installation

1. Clone and install dependencies:
```bash
git clone https://github.com/yourusername/shoppinglist.git
cd shoppinglist
npm install
```

2. Environment configuration:
```bash
# Create .env file
echo "MONGODB_URI=mongodb://localhost:27017/shoppinglist
PORT=3000" > .env
```

3. Start development servers:
```bash
# Terminal 1: Start MongoDB
sudo systemctl start mongod

# Terminal 2: Start backend
npm run server

# Terminal 3: Start frontend
npm run dev
```

## Development

### Available Scripts
- `npm run dev` - Start frontend (http://localhost:5173)
- `npm run server` - Start backend (http://localhost:3000)
- `npm run build` - Build for production
- `npm test` - Run tests

### Component Structure
- `App.jsx`: Main container, handles state and localStorage
- `groceries.jsx`: List rendering and management
- `listItem.jsx`: Individual item display and controls

## Browser Support
- Modern browsers with localStorage support
- Mobile-responsive design
- Offline capability through localStorage

## Contributing
1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Submit pull request

## License
MIT License
