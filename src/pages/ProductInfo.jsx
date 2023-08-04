import React, { useState, useEffect } from "react";
import logo from '../assets/logo.png';
import DetailedProduct from "../components/DetailedProduct";
import { Link, useLoaderData, useParams } from "react-router-dom";


function ProductInfo(){
    const { productName } = useParams()
    const[country,setCountry]=useState([]);
  //  const chosenCountry= useLoaderData()

    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/name/${productName}`)
        .then(response => response.json())
        .then(data => {
          if (Array.isArray(data) && data.length > 0) {
              setCountry(data[0]);
          }
      })
        .catch(error => console.log(error));
    },[productName]);
    //dependency arraydeki [name], url deki name her değiştiğinde fonksiyonun yeniden çalışacağı anlamına gelir.

    return(
        <div> 
         <div className='logo_cont'> <img src={logo} className="App-logo" alt="logo"/> </div>
         <Link to="/">{"<Back to list"}</Link>
         <div className="info_box">
                <DetailedProduct className="product"
                productPic={country?.flags?.png}
                productName={country?.name?.common}
                price={country?.area}
                additional={country?.capital}
                text={country?.capital}
             
              />
            
         </div>
        </div>
        )
}

export default ProductInfo;

//loader function - henüz kullanılmıyor
export const Loader =async ({ params }) => {
  const {name} = params 

  const response = await fetch("http://localhost:3000/"+ name)
  return response.json
}