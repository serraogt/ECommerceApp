import { React, useState } from 'react'
import data from "../data/productData.jsx"

function List(props) {
    const filteredData = data.filter((el) => {
        if (props.input === '') {
            return el;
        } else {
            return el.text.toLowerCase().includes(props.input)
        }
    })
    return (
       
            {filteredData.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
     
    )
}

export default List