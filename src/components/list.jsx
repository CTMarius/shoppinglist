import React from 'react';
import 'list.css';
import Add from 'add.jsx';

const List = (props) => {
  const classes = 'list ' + props.className;
  return (
    <Add />
    <div className={classes}>{props.children}</div>
  );
}

export default List;