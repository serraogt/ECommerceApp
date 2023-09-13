
import './App.css';
import React, {useEffect} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import store from './data/Store.jsx';
import { Provider } from 'react-redux'

import Home from './pages/Home';
import ProductInfo from './pages/ProductInfo.jsx';
import DeletePage from './pages/Delete';
import { fetchCountriesData } from "./data/Slicer";

function App() {

  const dispatch = useDispatch();

  useEffect(() => { //use effectte if else yok
    dispatch(fetchCountriesData());
  }, []); 

  return (
    <div>
      <Routes>
        <Provider store={store}>
        <Route path='/' element={<Home/>}/>
        <Route path='/delete' element={<DeletePage/>} />
        <Route path='/:productName' element={<ProductInfo/>}/>
        </Provider>
      </Routes>
    </div>
      );
}

export default App;
