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
      <Searchbar className="sb"/>
      <div className='container'>
        {productData.map((product,id) => (  
          <div>
          <Product 
            key={id}
            productPic={product.productPic}
            productName={product.productName}
            price={product.price}
            additional={product.additional}/> 
          <br/>
          </div>
            )) }
         </div> 
    </div> 
      );
}

export default App;
