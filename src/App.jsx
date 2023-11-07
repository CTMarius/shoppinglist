import React, { useState, useEffect } from 'react';
import './App.css';
import Groceries from './components/groceries.jsx';
import { fetchListData } from "./handlers/listData.jsx";

export default function App() {
  const [groceries, setGroceries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchListData();
      setGroceries(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Let's get started!</h2>
      <Groceries groceries={groceries} />
    </div>
  );
}