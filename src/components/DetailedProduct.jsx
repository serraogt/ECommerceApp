import React from "react";
import './DetailedProduct.css';


function DetailedProduct({productPic, productName, price, additional, text} ){
    return(
        <div className="product_info_card">
            <img alt="product" src={productPic} width={248} height={248}/><br/>
            <label> {productName}</label><br/>
            <label>{price} TL</label><br/>
            <label>{additional}</label><br/>
            <h2>{text}</h2><br/>
            <label>{text}</label>
            <label>{text}</label>
       </div>
    );
}

export default DetailedProduct;