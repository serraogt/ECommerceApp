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
import { fetchCountriesData } from "../data/Slicer";

function Home() {
  //const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [nameFilteredCountries, setNameFilteredCountries] = useState([]);
  const [statusFilteredCountries, setStatusFilteredCountries] = useState([]);
  const [inputValue,setInputValue]=useState([]);
  const [chosenValue,setChosenValue]=useState([]);

  const dispatch = useDispatch();
  const countries = useSelector((state) => state.counter.countries);
  console.log("frender")
 /* useEffect(() => { //use effectte if else yok
    dispatch(fetchCountriesData());
  }, []);
*/
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

{/* 

Eğer key olmazsa Warning: Each child in a list should have a unique "key" prop. 

Key olur unique olmazsa

9react-dom.development.js:86 Warning: Encountered two children with the same key, `[object Object]`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.
    at div
    at div
    at Home (http://localhost:3000/main.181d7920c195571c3c68.hot-update.js:45:84)
    at RenderedRoute (http://localhost:3000/static/js/bundle.js:63546:5)
    at Routes (http://localhost:3000/static/js/bundle.js:64178:5)
    at div
    at App
    at Provider (http://localhost:3000/static/js/bundle.js:59428:3)
    at Router (http://localhost:3000/static/js/bundle.js:64116:15)
    at BrowserRouter (http://localhost:3000/static/js/bundle.js:62219:5) */}

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