import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { img, name, seller, price, ratings } = props.product;
    const handleAddToCart = props.handleAddToCart;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h6 className='product-name'>{name}</h6>
            <p>Price: $ {price}</p>
            <br />
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings} Stars</p>

            <button onClick={()=>handleAddToCart(props.product)} className='btn-cart'>Add to Cart &nbsp;
            <FontAwesomeIcon icon={faCartPlus} />
             </button>
             
        </div>
       
    );
};

export default Product;