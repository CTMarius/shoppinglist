import React, { useState } from 'react';
import './groceries.css';
import ListItem from './listItem.jsx';
import Add from './add.jsx';

const Groceries = (props) => {
  const [title, setTitle] = useState(props.title);
  const [groceries, setGroceries] = useState(props.groceries);

const ClickHandler = () => {
  let newTitle = prompt('Please enter your new title');
  if (newTitle) {
    const newItem = {
      id: 'e' + (groceries.length + 1),
      title: newTitle,
      amount: 0,
      date: new Date()
    };
    setTitle(newTitle);
    setGroceries([...groceries, newItem]);

    // Post request to api/entry with the new title
    fetch('api/entry', {
      method: 'POST',
      body: JSON.stringify({ title: newTitle }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('Error:', error));
  }
};

  const listItems = groceries.map((item) => (
    <ListItem key={item.id} title={item.title} />
  ));

  return (
    <div>
      <Add onClick={ClickHandler} />
      {listItems}
    </div>
  );
};

export default Groceries;