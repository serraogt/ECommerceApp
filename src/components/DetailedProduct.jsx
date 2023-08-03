import React from "react";
import './DetailedProduct.css';


function DetailedProduct({ productPic, productName, price, additional, text} ){
    return(
        <div className="product_info_card">
            <img alt="product" src={productPic} width={248} height={248}/><br/>
            <label> {productName}</label><br/>
            <label>{price} TL</label><br/>
            <label>{additional}</label><br/>
            <h3>{text}</h3><br/>
            <label>{text} hakkında bilgi & </label>
            <label>{text} bilgi bilgi <br/> bilgi bilgi</label>
       </div>
    );
}

export default DetailedProduct;