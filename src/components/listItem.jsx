import React from 'react';
import './listItem.css';
import Remove from './remove.jsx';

const ListItem = (props) => {
  const handleRemove = () => {
    const listItemElement = document.getElementsByClassName('listItem')[0];
    listItemElement.remove();
  };

  return (
    <div className="listItem">
      <Remove onClick={handleRemove} />
      {props.title}
    </div>
  );
}

export default ListItem;