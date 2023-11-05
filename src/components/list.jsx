import React from 'react';
import 'list.css';
import Add from './add.jsx';

const List = (props) => {
  const classes = 'list ' + props.className;
  return (
    <div>
      <Add />
      <div className={classes}>{props.children}</div>
    </div>
  );
}

export default List;