// Home.jsx
import logo from '../assets/logo.png';
import './Home.css';
import React, { useEffect, useState } from 'react';
import Product from '../components/Products';
import productData from '../data/productData';
import Searchbar from '../components/Searchbar';
import { Link, Route, Routes } from 'react-router-dom';
import Dropdown from '../components/Dropdown';

function Home() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [UNFilter, setUNFilter]= useState([]);
  
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(response => response.json())
      .then(data => {
        setCountries(data);
        setFilteredCountries(data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleInputChange = (inputValue) => {
    const filteredData = countries.filter(country => {
      const lowerCaseInput = inputValue.toLowerCase();
      const lowerCaseCountryName = country.name.common.toLowerCase();
      return lowerCaseCountryName.includes(lowerCaseInput);
    });
    setFilteredCountries(filteredData);
  };

  const handleUNChange = (chosenValue) => {
    console.log("chosenValue:", chosenValue);
    console.log("type of chosen value",typeof chosenValue)
    if (chosenValue === "all") {
      setUNFilter(filteredCountries);
      //eğer search ile bazı ülkeler filtrelenmişse kaldığı yerden devam etsin diye o veriyi kullandım
    } 
  else{
      const chosenCountries = filteredCountries.filter(country => {
        console.log(toString(country.unMember) === chosenValue)
        return toString(country.unMember) === chosenValue;
        //all ve unknown da olduğu için stringe çevirdim
      });
      setUNFilter(chosenCountries);
    }
  };

  
  return (
    <div className="Home">
      <div className='top_container'>
        <div className='logo_cont'> <img src={logo} className="App-logo" alt="logo" width={500} /> </div>
        <div>
          <Searchbar className="sb" onInputChange={handleInputChange} />
        </div>
          <Dropdown onInputChange={handleUNChange}></Dropdown>

      </div>
      <div className='container'>
        {UNFilter.map (country => (
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
