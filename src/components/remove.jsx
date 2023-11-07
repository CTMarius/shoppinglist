import React from 'react';
import './remove.css';

const Remove = (props) => {
  return <div onClick={props.onClick} className="remove"></div>;
}

export default Remove;