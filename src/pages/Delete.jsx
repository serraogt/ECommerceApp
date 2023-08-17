import { useDispatch, useSelector } from "react-redux";
import { deleteCountry } from "../data/Slicer";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import SearchBarToDelete from "../components/DeleteSearch";
import { fetchCountriesData } from "../data/Slicer";

function DeletePage() {

  const [filteredCountries, setFilteredCountries] = useState([]);
  const [inputValue, setInputValue] = useState(""); 
  
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.counter.countries);
    
    const countriesLength= countries.length;
    
    useEffect(() => { //use effectte if else yok
      dispatch(fetchCountriesData());
    }, [dispatch]);
  
    
    const handleDelete = () => {
      const countryToDelete = countries.find(country => country.name.common.toLowerCase() === inputValue.toLowerCase());
      if (countryToDelete) {
        dispatch(deleteCountry(countryToDelete.name.common));
        setInputValue(""); // Clear the input field after deleting
      }
    };

    const handleInputChange = () => {  
      setInputValue(inputValue);
      const lowerCaseInput = inputValue.toLowerCase();
    
      const filteredData = countries.filter((country) => {
        const lowerCaseCountryName = country.name.common.toLowerCase();
        return (
          lowerCaseCountryName.includes(lowerCaseInput)
        );
      });
    
      setFilteredCountries(filteredData);
    };


  
    //bir yere bağlayamadım henüz
    return(
        <div> <Link to={'/'}>back</Link>  <br/>
        <div>Number Of Countries {countriesLength} </div> 
         <SearchBarToDelete  placeholder="Country to delete" onInputChange={handleInputChange}/>
        <div className="dataResult">
          {filteredCountries.slice(0, 15).map( country => (
            <div key = {country.name.common}>
              {/*<Link className="dataItem" to={value.link} target="_blank">
               // <p>{value.title} </p>
         
              </Link> */ }
              </div>
          )) }
        </div>
    </div>
    );
    }
    
    export default DeletePage;