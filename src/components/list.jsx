import React from 'react';
import 'list.css';

const List = (props) => {
  const classes = 'list ' + props.className;
  return (
    <div className={classes}>{props.children}</div>
  );
}

export default List;