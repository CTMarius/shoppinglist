import './App.css'
import Groceries from './components/groceries.jsx'

export default function App(props) {
  return (
    <div>
      <h2>Let's get started!</h2>
      <Groceries groceries={props} />
    </div>
  )
}