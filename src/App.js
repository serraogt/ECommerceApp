import './App.css';
import {Link, Route, Routes} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import store from './data/store.js';
import { Provider } from 'react-redux'
import React, { useEffect, useState } from 'react';

import Home from './pages/Home';
import ProductInfo from './pages/ProductInfo.jsx';
import DeletePage from './pages/Delete';
import { fetchCountriesData } from "./data/Slicer";

function App() {

  const [cookies, setCookies]=useState([]);
  const dispatch = useDispatch();

  localStorage.setItem("name","Bob");
  console.log(localStorage.getItem("name"));

  sessionStorage.setItem("name","Anna");
  console.log(sessionStorage.getItem("name"));

  useEffect(() => { //use effectte if else yok
    dispatch(fetchCountriesData());
  }, []); 

  /*   gpt bunu önerdi hem çalışmıyor hem de anlamadım :/
  useEffect(() => {
    // Set cookies after the initial render
    document.cookie = "username=John; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";
    document.cookie = "username=Jane; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

    // Update the state to reflect the new cookies
    setCookies(document.cookie);
  }, []); */

  setCookies(document.cookie);

  document.cookie = "username=John; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";
  console.log(cookies)
  document.cookie = "username=Jane; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";
  console.log(cookies);
  document.cookie = "username=; expires=" +new Date(1970,0,1).toUTCString() + "path=/";
  console.log(cookies);
  
  return (
    <div>
      <Provider store={store}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/delete' element={<DeletePage/>} />
        <Route path='/:productName' element={<ProductInfo/>}/>
      </Routes>
      </Provider>
    </div>
      );
}

export default App;