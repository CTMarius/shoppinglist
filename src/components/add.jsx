import React from 'react';
import './add.css';

const Add = () => {
  const ClickHandler = () => {
    let newTitle = prompt("Please enter your new title");
  };
  return <div onClick={ClickHandler} className="add">
    Add
  </div>;
}

export default Add;