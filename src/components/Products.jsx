import React from "react";
import './Products.css';

//let additional=null; should be at somewhere to allow null values (?)

function Products({productPic, productName, price, additional} ){
    return(
        <div className="product_card">
            <img alt="product" src={productPic} width={240} height={150}/><br/>
            <label> {productName}</label><br/>
            <label>{price} TL</label><br/>
            <label>{additional}</label><br/>
       </div>
    );
}

export default Products;