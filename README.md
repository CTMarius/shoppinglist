# Shopping List Application

A modern React-based shopping list application with MongoDB backend, CORS support, and local storage fallback.

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
│   ├── services/
│   │   └── api.js                       # API integration service
│   ├── App.jsx                          # Main component
│   └── index.jsx                        # Entry point
└── server.jsx                           # Express server
```

## Features

### Frontend
- React 18 with Hooks for state management
- API integration with error handling
- Local storage fallback mechanism
- Responsive grid layout design
- Real-time updates
- Loading states and error handling

### Backend
- Express.js server with CORS support
- MongoDB integration with Mongoose
- RESTful API endpoints
- Body parsing middleware
- Static file serving
- Cross-origin resource sharing

## API Configuration

### Server Setup
```javascript
PORT=3000
MONGODB_URI=mongodb://localhost:27017/shoppinglist
CORS_ORIGIN=http://localhost:5173
```

### API Endpoints

| Endpoint | Method | Description | Request Body |
|----------|--------|-------------|--------------|
| `/api/items` | GET | Retrieve all items | - |
| `/api/items` | POST | Create new item | `{ name: string, completed: boolean }` |
| `/api/items/:id` | GET | Get specific item | - |
| `/api/items/:id` | PUT | Update item | `{ name?: string, completed?: boolean }` |
| `/api/items/:id` | DELETE | Remove item | - |

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

2. Install required packages:
```bash
npm install cors body-parser express mongoose
```

3. Environment configuration:
```bash
# Create .env file
echo "MONGODB_URI=mongodb://localhost:27017/shoppinglist
PORT=3000
CORS_ORIGIN=http://localhost:5173" > .env
```

4. Start development servers:
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

### API Integration
The frontend communicates with the backend through the `api.js` service:
- Automatic error handling
- Loading state management
- Local storage fallback
- CORS support

### Data Flow
1. Frontend makes API request
2. Server processes request with CORS
3. MongoDB handles data operation
4. Response sent back to frontend
5. Local storage updated as backup

## Error Handling
- API call failures fallback to local storage
- Loading states during API operations
- Error messages displayed to user
- CORS errors prevented with proper headers

## Browser Support
- Modern browsers with localStorage support
- Cross-origin requests supported
- Mobile-responsive design

## Contributing
1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Submit pull request

## License
MIT License
