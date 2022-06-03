import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'
const Product = ({product,handleAddToCart}) => {
    const{img,name,seller,price,ratings,stock}=product;
   
    return (
        <div className='product'>
            <img src={img} alt=''/>
            <div className='product-info'>
            <p>name:{name}</p>
           <p>seller:{seller}</p>
           <p>price:${price}</p>
           <p>ratings:{ratings}</p>
            <p>stock:{stock}</p>  
            </div>
            <button onClick={()=>handleAddToCart(product)} className='button-cart'>
                <p className='button-text'>add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;