// Dropdown.jsx 
const Dropdown = (props) => {
  const handleInputChange = (event) => {
    props.onInputChange(event.target.value,event.target.id); 
    
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
          onChange={handleInputChange}
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
