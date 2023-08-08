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

    if (chosenValue === "all") {
      const lowerCaseInput = inputValue.toLowerCase();
      const nameFilteredData = countries.filter((country) => {
        //bu^ satırda statusfilteredcountries.filter yapmayı da denedim aşağıdaki için de tam tersi ama çalıştıramadım
        const lowerCaseCountryName = country.name.common.toLowerCase();
        return lowerCaseCountryName.includes(lowerCaseInput)
    })
    setFilteredCountries(nameFilteredData)}

    else{
    const lowerCaseInput = inputValue.toLowerCase();
    const nameFilteredData = countries.filter((country) => {
      //bu^ satırda statusfilteredcountries.filter yapmayı da denedim aşağıdaki için de tam tersi ama çalıştıramadım
      const lowerCaseCountryName = country.name.common.toLowerCase();
      return lowerCaseCountryName.includes(lowerCaseInput) && String(country.unMember) === chosenValue;
    });
    setFilteredCountries(nameFilteredData)}
  }

    const handleInputChange2 = (chosenValue) =>{
    const statusFilteredData = countries.filter((country) => {
      if (chosenValue === "all") {
        const lowerCaseInput = inputValue.toLowerCase();
      //bu^ satırda namefilteredcountries.filter yapmayı da denedim aşağıdaki için de tam tersi ama çalıştıramadım
      const lowerCaseCountryName = country.name.common.toLowerCase();
      return lowerCaseCountryName.includes(lowerCaseInput);
      }
       else {
        return String(country.unMember) === chosenValue;
      }
    });
    setChosenValue(chosenValue);
    setFilteredCountries(statusFilteredData);
  };
  

  return (
    <div className="Home">
      <div className='top_container'>
        <div className='logo_cont'> <img src={logo} className="App-logo" alt="logo" width={500} /> </div>
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