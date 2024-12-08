// CartItem.js
import React from 'react';
import './CartItem.css';

const CartItem = ({ product }) => {
  return (
    <div className="cart-item">
      <img src={`../assets/images/${product.image}`} alt={product.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{product.name}</h3>
        <p>SKU: {product.sku}</p>
        <p>Cantidad: {product.quantity}</p>
        <p>Precio: ${product.price}</p>
        {product.comparePrice && product.comparePrice > product.price && (
          <p className="compare-price">Antes: ${product.comparePrice}</p>
        )}
      </div>
      <div className="cart-item-price">
        <p>Total: ${(product.price * product.quantity).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartItem;
