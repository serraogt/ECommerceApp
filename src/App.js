import logo from './assets/logo.png';
import './App.css';
import React from 'react';
import Product from './components/Products';
import productData from './data/productData';
import Searchbar from './components/Searchbar';


function App() {
 
  return (
    <div className="App">
    
      <img src={logo} className="App-logo" alt="logo" width={500} />
      <Searchbar/>
      
    </div> 
      );
}

export default App;
