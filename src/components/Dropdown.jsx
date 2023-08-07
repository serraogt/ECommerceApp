// Dropdown.jsx 
import { useState } from "react";

function Dropdown ({onInputChange}) {
  const [chosen, setChosen]= useState("all");

  let inputHandler = (event) => {
   setChosen(event.target.value); 

    if (typeof onInputChange === "function") {
      onInputChange(event.target.value);
      console.log("event target value",event.target.value)
      console.log("type of event target value", typeof event.target.value)
    }
 };

  return (
      <div className="selectWrapper">
        <label className="label" htmlFor="status">
          United Nations Member
        </label>
        <select
          className="select"
          name="status"
          id="status"
          onChange={inputHandler}
        >
          <option value="all">All</option>
          <option value="true" >True</option>
          <option value="false">False</option>
          <option value="unknown">Unknown</option>
        </select>
      
      </div>
  );
};

export default Dropdown;
