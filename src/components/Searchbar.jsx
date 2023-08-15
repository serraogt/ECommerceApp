// Searchbar.jsx
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import './Searchbar.css';
import List from "./List";

function Searchbar({ onInputChange }) {
  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    
    setInputText(e.target.value);

    // Call the onInputChange function passed from the parent component
    if (typeof onInputChange === "function") {
      onInputChange(e.target.value);
    }
  };

  return (
    <div className="search-box">
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search Product"
          InputProps={{
            style: {
              color: "white",
              background: "#222",
            },
            inputMode: "search",
          }}
          InputLabelProps={{
            style: {
              color: "white",
            },
          }}
        />
      </div>
    </div>
  );
}

export default Searchbar;