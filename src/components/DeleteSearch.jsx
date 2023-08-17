import React, { useState } from "react";
//import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { TextField } from "@material-ui/core";

function SearchBarToDelete({ onInputChange}) {
 // const [filteredData, setFilteredData] = useState([]);
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    
    const input=e.target.value
    setInputText(input);

    // Call the onInputChange function passed from the parent component
    if (typeof onInputChange === "function") {
      onInputChange(input);
    }
  };


    /*if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };*/

  return (
    <div className="search">
      <div className="searchInputs">
        <TextField
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Country to Delete"
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

export default SearchBarToDelete;