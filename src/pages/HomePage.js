import React from 'react';
import '../styles/HomePage.css';    
import Slider from '../components/Slider';  
import ProductItem from '../components/ProductItem';  

import product1 from '../assets/images/product1.jpg';
import product2 from '../assets/images/product2.jpg';
import product3 from '../assets/images/product3.jpg';
import product4 from '../assets/images/product1_hombre.jpg';
import product5 from '../assets/images/product3_hombre.jpg';  
import product6 from '../assets/images/product4_hombre.jpg';  

// Datos de productos
const products = [
  {
    image: product1,
    name: 'Producto 1',
    sku: '12345',
    price: 25.99,
    comparePrice: 30.00,
  },
  {
    image: product2,
    name: 'Producto 2',
    sku: '12346',
    price: 40.99,
  },
  {
    image: product3,
    name: 'Producto 3',
    sku: '12347',
    price: 15.50,
    comparePrice: 18.00,
  },
  {
    image: product4,
    name: 'Producto 4',
    sku: '12348',
    price: 25.99,
  },
  {
    image: product5,
    name: 'Producto 5',  
    sku: '12349',
    price: 15.5,
  },
  {
    image: product6,
    name: 'Producto 6',  
    sku: '12350',
    price: 55,
  },
];

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Slider */}
      <Slider />

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Productos Destacados</h2>
        <div className="product-list">
          {products.map((product) => (
            <ProductItem key={product.sku} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
