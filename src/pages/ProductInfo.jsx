import React, { useState, useEffect } from "react";
import logo from '../assets/logo.png';
import DetailedProduct from "../components/DetailedProduct";

function ProductInfo(){
    const[countries,setCountries]=useState([]);
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => setCountries(data))
        .catch(error => console.log(error));
    },[]);

    return(
        <div>
         <div className='logo_cont'> <img src={logo} className="App-logo" alt="logo"/> </div>
         <div className="info_box">
            {countries.map(country=>(
            <div key={country.name}>
                <DetailedProduct
                productPic={country.flags.png}
                productName={country.name.common}
                price={country.area}
                additional={country.capital}
             
              />
            </div>))}
         </div>
        </div>
        )
}

export default ProductInfo;
/*
.detail {
    background-color: #10aac2;
    display: flex;
    align-items: center;
    width: 620px;
    padding: 36px 12px 36px 36px;
    @media all and (max-width: 767px) {
      flex-direction: column;
      width: 260px;
      padding: 18px;
    }
    &__img {
      width: 230px;
      @media all and (max-width: 767px) {
        order: 1;
      }
    }
    &__info {
      margin: 0;
      padding: 0 0 0 36px;
      text-align: left;
      @media all and (max-width: 767px) {
        padding: 0 0 6px 0;
        text-align: center;
      }
      &__name {
        margin-top: 0;
        font-size: 24px;
      }
      &__attribute {
        margin: 6px 0;
      }
      &__title {
        font-weight: bold;
      }
    }
  }
  */