import React from 'react';
import './add.css';

const Add = (props) => {
  return <div onClick={props.onClick} className="add">
    Add
  </div>;
}

export default Add;