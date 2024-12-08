import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import '../styles/Cart.css';

const Cart = () => {
  const { cart, removeFromCart, getTotalPrice, clearCart } = useCart();
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);

  const handleApplyCoupon = () => {
    if (coupon.toLowerCase() === 'descuento10') {
      setDiscount(10);
      alert('Cupón aplicado: 10% de descuento');
    } else {
      alert('Cupón inválido');
      setDiscount(0);
    }
  };

  const totalPrice = getTotalPrice();
  const discountedPrice = totalPrice - (totalPrice * discount) / 100;

  return (
    <div className="cart-page">
      <h1 className="cart-title">Carrito de Compras</h1>

      {/* Lista de productos */}
      <div className="cart-items">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.sku} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>SKU: {item.sku}</p>
                <p>Precio: ${item.price.toFixed(2)}</p>
                {item.comparePrice && (
                  <p className="compare-price">Antes: ${item.comparePrice.toFixed(2)}</p>
                )}
                <div className="cart-item-actions">
                  <button
                    onClick={() => {
                      if (window.confirm('¿Estás seguro de que deseas eliminar este producto?')) {
                        removeFromCart(item.sku);
                      }
                    }}
                    className="remove-btn"
                  >
                    Quitar
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Tu carrito está vacío.</p>
        )}
      </div>

      {/* Resumen de compra */}
      {cart.length > 0 && (
        <div className="cart-summary">
          <h2>Resumen de Compra</h2>
          <div className="coupon">
            <input
              type="text"
              placeholder="Ingresa tu cupón"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
            <button onClick={handleApplyCoupon}>Aplicar Cupón</button>
          </div>
          <p>Subtotal: ${totalPrice.toFixed(2)}</p>
          {discount > 0 && <p>Descuento aplicado: -${(totalPrice * discount / 100).toFixed(2)}</p>}
          <p className="total">Total: ${discountedPrice.toFixed(2)}</p>
          <button className="clear-cart-btn" onClick={clearCart}>
            Vaciar carrito
          </button>

          <button className="pay-btn">
            Pagar Pedido
          </button>
        </div>
      )}

      {/* Secciones desplegables */}
      <div className="faq-sections">
        <details>
          <summary>¿Necesitas ayuda?</summary>
          <p>Contáctanos en soporte@malva.com o llama al 555-123-4567.</p>
        </details>
        <details>
          <summary>Métodos de pago</summary>
          <p>Aceptamos tarjetas de crédito, PayPal, y transferencias bancarias.</p>
        </details>
        <details>
          <summary>Envío y devoluciones</summary>
          <p>Ofrecemos envío gratuito para compras superiores a $50. Puedes devolver tus productos en un plazo de 30 días.</p>
        </details>
      </div>
    </div>
  );
};

export default Cart;
