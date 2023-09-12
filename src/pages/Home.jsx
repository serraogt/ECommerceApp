// Home.jsx
import logo from '../assets/logo.png';
import './Home.css';
import React, { useEffect, useState } from 'react';
import Product from '../components/Products';
import productData from '../data/productData';
import Searchbar from '../components/Searchbar';
import { Link, Route, Routes } from 'react-router-dom';
import Dropdown from '../components/Dropdown';
import Delete from "./Delete";
import { useSelector, useDispatch } from 'react-redux';


function Home() {
  //const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [nameFilteredCountries, setNameFilteredCountries] = useState([]);
  const [statusFilteredCountries, setStatusFilteredCountries] = useState([]);
  const [inputValue,setInputValue]=useState([]);
  const [chosenValue,setChosenValue]=useState([]);
 
  const countries = useSelector((state) => state.counter.countries);
  console.log("frender")
  console.log(countries)

 /* useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(response => response.json())
      .then(data => {
        setCountries(data);
        setFilteredCountries(data);
      })
      .catch(error => console.log(error));
  }, []); //yaşam döngüsü ve bileşenler arası etkileşim */
   

  const handleInputChangeInputValue = (inputValue) => {
  
      setInputValue(inputValue);
      
      const lowerCaseInput = inputValue.toLowerCase();
    
      const filteredData = countries.filter((country) => {
        const lowerCaseCountryName = country.name.common.toLowerCase();

        return (
          lowerCaseCountryName.includes(lowerCaseInput) &&
          (chosenValue == '' || chosenValue === "all" || String(country.unMember) === chosenValue)
        );
      });
    
      setFilteredCountries(filteredData);
    };
  

  const handleInputChangeUnMembers = (chosenValue,inputValue) => {

    setChosenValue(chosenValue);

    if(inputValue){
    const lowerCaseInput = inputValue.toLowerCase();
  
    const filteredData = countries.filter((country) => {
      const lowerCaseCountryName = country.name.common.toLowerCase();
      return (
        String(country.unMember) === chosenValue || chosenValue === "all"
      ) && lowerCaseCountryName.includes(lowerCaseInput);
    });
  
    setFilteredCountries(filteredData);
  }
  else{
    const filteredData = countries.filter((country) => {
      const lowerCaseCountryName = country.name.common.toLowerCase();
      return (
        String(country.unMember) === chosenValue || chosenValue === "all"
      );
    });
  
    setFilteredCountries(filteredData);
  }
  };
  

  return (
    <div className="Home"> 
      <div className='top_container'>
        <img src={logo} className="App-logo" alt="logo" />
        <Link to={'/delete'} > Delete Country</Link>
        <div>
          <Searchbar className="sb" onInputChange={handleInputChangeInputValue} />
        </div>
          <Dropdown onInputChange={handleInputChangeUnMembers}></Dropdown>
      </div>
      <div className='container'>
        {filteredCountries.map (country => (
          <div key={country.name.common}> 

          <Link to={`/${country.name.common}`}>
            <Product
              productPic={country.flags.png}
              productName={country.name.common}
              price={country.area}
              additional={country.capital}
            />
            </Link>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
