import "./groceries.css";
import List from "./list.jsx";
import Add from "./add.jsx";

const Groceries = (props) => {
  const ClickHandler = () => { 
    let newTitle = prompt("Please enter your new title");
  };
  
  return (
    <div>
      <Add onClick={ClickHandler}></Add>
      <List className="groceries"></List>
    </div>
  );
}

export default Groceries;