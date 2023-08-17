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
  const countries = useSelector((state) => {
    console.log(state.counter.countries);
    return state.counter.countries;
  });


  const countriesLength = countries.length;

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
  const handleFilter = (searchWord) => {
    setInputValue(searchWord);
    let newFilter = []; 

    if (searchWord !== undefined) {
    const newFilter = countries.filter((value) => {
      return value.title && value.title.toLowerCase().includes(searchWord.toLowerCase());
    })}
    ;
  
    setFilteredCountries(newFilter);
  };

  //bir yere bağlayamadım henüz
  return (
    <div> <Link to={'/'}>back</Link>  <br />
      <div>Number Of Countries {countriesLength} </div>

      <SearchBarToDelete placeholder="Country to delete" onInputChange={handleFilter} />
      <div className="dataResult">
      {filteredCountries.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                <p>{value.title} </p>
              </a>
            );
          })}
      </div>

    </div>

  );
}

export default DeletePage;