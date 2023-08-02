// List.jsx
import React from 'react';
import "./List.css";
import data from "../data/productData.jsx";

function List(props) {
  const filteredData = data.filter((el) => {
    if (props.input === '') {
      return true; // If input is empty, include all items
    } else {
      return el.productName.toLowerCase().includes(props.input.toLowerCase());
    }
  });

  return (
    <ul>
      {filteredData.map((item) => (
        <li key={item.id}>{item.productName}</li>
      ))}
    </ul>
  );
}

export default List;