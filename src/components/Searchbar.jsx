import {React, useState} from "react";
import TextField from "@mui/material/TextField";
import './Searchbar.css';
import List from "./List";

function Searchbar(){
    
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
      
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };
  
    return(
  <div className="search-box">
    <div className="search">
      <TextField
        id="outlined-basic"
        onChange={inputHandler}
        variant="outlined"
        fullWidth
        label="Search"
      />
    </div>
    <List input={inputText} />
  </div>
  );

}

export default Searchbar;