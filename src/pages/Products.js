import React, { useState } from 'react';
import ProductItem from '../components/ProductItem';
import { useCart } from '../context/CartContext';  
import '../styles/Products.css';  

import product1H from '../assets/images/product1_hombre.jpg';
import product2H from '../assets/images/product2_hombre.jpg';
import product3H from '../assets/images/product3_hombre.jpg';
import product4H from '../assets/images/product4_hombre.jpg';
import product5H from '../assets/images/product5_hombre.jpg'; 
import product6H from '../assets/images/product6_hombre.jpg'; 
import product1M from '../assets/images/product1_mujer.jpg';
import product2M from '../assets/images/product2_mujer.jpg';
import product3M from '../assets/images/product3_mujer.jpg';
import product4M from '../assets/images/product4_mujer.jpg';
import product5M from '../assets/images/product5_mujer.jpg'; 
import product6M from '../assets/images/product6_mujer.jpg'; 

// Datos de productos por género
const products = {
  hombre: [
    { image: product1H, name: 'Camiseta Hombre', sku: '12345', price: 25.99, comparePrice: 30.00 },
    { image: product2H, name: 'Pantalón Hombre', sku: '12346', price: 40.99 },
    { image: product3H, name: 'Zapatos Hombre', sku: '12347', price: 15.50, comparePrice: 18.00 },
    { image: product4H, name: 'Chaqueta Hombre', sku: '12348', price: 55.00 },
    { image: product5H, name: 'Sudadera Hombre', sku: '12349', price: 35.99, comparePrice: 40.00 },
    { image: product6H, name: 'Bermuda Hombre', sku: '12350', price: 29.99 },
  ],
  mujer: [
    { image: product1M, name: 'Blusa Mujer', sku: '22345', price: 25.99, comparePrice: 30.00 },
    { image: product2M, name: 'Falda Mujer', sku: '22346', price: 40.99 },
    { image: product3M, name: 'Tacones Mujer', sku: '22347', price: 15.50, comparePrice: 18.00 },
    { image: product4M, name: 'Vestido Mujer', sku: '22348', price: 55.00 },
    { image: product5M, name: 'Top Mujer', sku: '22349', price: 27.99, comparePrice: 32.00 },
    { image: product6M, name: 'Pantalón Mujer', sku: '22350', price: 33.50 },
  ],
};

const Products = () => {
  const [gender, setGender] = useState('hombre'); 
  const { addToCart } = useCart(); 

  // Función para manejar el cambio de género
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div className="products-page">
      <h1>Productos</h1>

      {/* Selector de género */}
      <div className="gender-selector">
        <label htmlFor="gender">Selecciona género: </label>
        <select id="gender" value={gender} onChange={handleGenderChange}>
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
        </select>
      </div>

      {/* Lista de productos */}
      <section className="product-list">
        {products[gender].map((product) => (
          <ProductItem key={product.sku} product={product} onAddToCart={addToCart} />
        ))}
      </section>
    </div>
  );
};

export default Products;
