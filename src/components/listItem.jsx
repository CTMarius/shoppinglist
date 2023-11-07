import React from 'react';
import './listItem.css';

const ListItem = (props) => {
  return <div className="listItem">{props.title}</div>;
}

export default ListItem;