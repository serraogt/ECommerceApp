import logo from '../assets/logo.png';
import '../App.css';
import React, { useEffect, useState } from 'react';
import Product from '../components/Products';
import productData from '../data/productData';
import Searchbar from '../components/Searchbar';
import { Link, Route, Routes } from 'react-router-dom';

function Home() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="Home">
      <div className='top_container'>
        <div className='logo_cont'> <img src={logo} className="App-logo" alt="logo" width={500} /> </div>
        <div> <Searchbar className="sb" /> </div>
      </div>
      <div className='container'>
        {countries.map(country => (
          <div key={country.name}> {/* Added key attribute */}
             <Link to="/product">
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
