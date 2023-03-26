import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then (res=>res.json())
        .then(data => setProducts(data))
        console.log(products);
    },[])
    return (
        <div className='shop-container'>
            <div className="products-container">
            <h1>the new shopping{products.length}</h1>
            </div>
            <div className="cart-container">
                <h2>Order Summary</h2>
            </div>
        </div>
    );
};

export default Shop;