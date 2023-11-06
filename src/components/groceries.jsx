import "./groceries.css";
import List from "./list.jsx";
import Add from "./add.jsx";

const Groceries = (props) => {
  return (
    <div>
      <Add />
      <List className="groceries"></List>
    </div>
  );
}

export default Groceries;