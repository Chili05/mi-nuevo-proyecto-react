import React, { useState } from 'react';
import { useCart } from '../context/CartContext'; 
import Modal from './Modal';
import '../styles/ProductItem.css';

const ProductItem = ({ product }) => {
  const { addToCart } = useCart(); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    setIsModalOpen(true); 
  };

  const handleConfirmAddToCart = () => {
    addToCart(product); 
    setIsModalOpen(false); 
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); 
  };

  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>SKU: {product.sku}</p>
      <p className="price">${product.price}</p>
      {product.comparePrice && (
        <p className="compare-price">
          <span>Compare at: ${product.comparePrice}</span>
        </p>
      )}
      <button onClick={handleAddToCart}>Agregar al carrito</button>

      {/* Modal de confirmación */}
      <Modal
        isOpen={isModalOpen}
        message={`¿Quieres agregar ${product.name} al carrito?`}
        onConfirm={handleConfirmAddToCart}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default ProductItem;
