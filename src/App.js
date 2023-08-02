
import './App.css';
import React, {useEffect} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import ProductInfo from './pages/ProductInfo.jsx';


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<ProductInfo/>}/>
      </Routes>
    </div>
      );
}

export default App;
