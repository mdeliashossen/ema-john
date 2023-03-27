import React from 'react';
import './Product.css';

const Product = (props) => {
    const { img, name, seller, quantity, price, ratings } = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <h6 className='product-name'>{name}</h6>
            <p>Price: $ {price}</p>
            <br />
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings} Stars</p>
           
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;