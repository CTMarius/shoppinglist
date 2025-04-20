# Shopping List App

A React-based shopping list application with MongoDB backend for managing your grocery shopping needs. Live deployment: https://gleeful-cranachan-7e2353.netlify.app/

## Project Structure

```
├── api/
│   ├── controllers/
│   │   └── journalController.jsx    # Handles business logic
│   ├── models/
│   │   └── journalModel.jsx         # MongoDB schema definitions
│   └── routes/
│       └── journalRoutes.jsx        # API route definitions
├── src/
│   ├── components/
│   │   ├── add.jsx                  # Add item component
│   │   ├── groceries.jsx            # Main list component
│   │   ├── listItem.jsx             # Individual item component
│   │   └── remove.jsx               # Remove item component
│   ├── handlers/
│   │   └── listData.jsx             # Data management functions
│   ├── App.jsx                      # Root component
│   └── index.jsx                    # Entry point
└── server.jsx                       # Express server configuration
```

## Features

- Create and manage multiple shopping lists
- Add and remove grocery items easily
- Mark items as purchased
- Persistent storage using MongoDB
- RESTful API for data management
- Responsive design for mobile and desktop
- Real-time updates

## Tech Stack

- **Frontend:** React 18
- **Backend:** Express.js
- **Database:** MongoDB
- **Build Tool:** Vite
- **State Management:** React Hooks
- **Styling:** CSS Modules

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/entry` | GET | List all entries |
| `/entry` | POST | Create new entry |
| `/entry/:id` | GET | Get specific entry |
| `/entry/:id` | PUT | Update specific entry |

## Prerequisites

- Node.js >= 16
- MongoDB >= 5.0
- npm or yarn

## Setup & Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/shoppinglist.git
cd shoppinglist
```

2. Create `.env` file:
```bash
MONGO_URI=mongodb://localhost:27017/shoppinglist
PORT=3000
```

3. Install dependencies:
```bash
npm install
```

4. Start development server:
```bash
npm run dev
```

5. Start backend server:
```bash
npm start
```

## Development

### Key Components
- `App.jsx`: Main application component
- `groceries.jsx`: Shopping list management
- `listItem.jsx`: Individual item display and controls

### Available Scripts
- `npm run dev` - Start development server (default: http://localhost:5173)
- `npm run build` - Build for production
- `npm start` - Start backend server (default: http://localhost:3000)
- `npm run preview` - Preview production build

## Environment Setup

1. Ensure MongoDB is running:
```bash
sudo systemctl start mongod
sudo systemctl status mongod
```

2. Default ports:
- Frontend: 5173
- Backend: 3000
- MongoDB: 27017

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - See LICENSE file for details
