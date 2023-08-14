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
import { useSelector, useDispatch } from 'react-redux/es/hooks/useSelector';


function Home() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [nameFilteredCountries, setNameFilteredCountries] = useState([]);
  const [statusFilteredCountries, setStatusFilteredCountries] = useState([]);
  const [inputValue,setInputValue]=useState([]);
  const [chosenValue,setChosenValue]=useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(response => response.json())
      .then(data => {
        setCountries(data);
        setFilteredCountries(data);
      })
      .catch(error => console.log(error));
  }, []); //yaşam döngüsü ve bileşenler arası etkileşim
   

  const handleInputChange = (inputValue) => {
  
      setInputValue(inputValue);
      const lowerCaseInput = inputValue.toLowerCase();
    
      const filteredData = countries.filter((country) => {
        const lowerCaseCountryName = country.name.common.toLowerCase();
        return (
          lowerCaseCountryName.includes(lowerCaseInput) &&
          (chosenValue === "all" || String(country.unMember) === chosenValue)
        );
      });
    
      setFilteredCountries(filteredData);
    };
  

  const handleInputChange2 = (chosenValue) => {
    setChosenValue(chosenValue);
    const lowerCaseInput = inputValue.toLowerCase();
  
    const filteredData = countries.filter((country) => {
      const lowerCaseCountryName = country.name.common.toLowerCase();
      return (
        String(country.unMember) === chosenValue || chosenValue === "all"
      ) && lowerCaseCountryName.includes(lowerCaseInput);
    });
  
    setFilteredCountries(filteredData);
  };
  

  return (
    <div className="Home"> 
      <div className='top_container'>
        <img src={logo} className="App-logo" alt="logo" />
        <Link to={'/delete'} > Delete Country</Link>
        <div>
          <Searchbar className="sb" onInputChange={handleInputChange} />
        </div>
          <Dropdown onInputChange={handleInputChange2}></Dropdown>
      </div>
      <div className='container'>
        {filteredCountries.map (country => (
          <div key={country.name}>
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