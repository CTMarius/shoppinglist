import './App.css'
import Groceries from './components/groceries.jsx'
import { listData } from "./mocks/listData.jsx";

export default function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <Groceries groceries={listData} />
    </div>
  )
}