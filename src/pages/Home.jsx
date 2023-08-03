// Home.jsx
import logo from '../assets/logo.png';
import './Home.css';
import React, { useEffect, useState } from 'react';
import Product from '../components/Products';
import productData from '../data/productData';
import Searchbar from '../components/Searchbar';
import { Link, Route, Routes } from 'react-router-dom';

function Home() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(response => response.json())
      .then(data => {
        setCountries(data);
        setFilteredCountries(data); // Set initial filteredCountries to all countries
      })
      .catch(error => console.log(error));
  }, []);

  const handleInputChange = (inputValue) => {
    // Filter countries based on the input value
    const filteredData = countries.filter(country => {
      const lowerCaseInput = inputValue.toLowerCase();
      const lowerCaseCountryName = country.name.common.toLowerCase();
      return lowerCaseCountryName.includes(lowerCaseInput);
    });

    setFilteredCountries(filteredData);
  };
  
  return (
    <div className="Home">
      <div className='top_container'>
        <div className='logo_cont'> <img src={logo} className="App-logo" alt="logo" width={500} /> </div>
      
        <div>
          <Searchbar className="sb" onInputChange={handleInputChange} />
        </div>

      </div>
      <div className='container'>
        {filteredCountries.map(country => (
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