import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/images/logo.png'; 
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart(); 
  const location = useLocation(); 

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Función para cerrar el menú cuando se selecciona una opción
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Logo" className="logo-img" />
        </Link>
      </div>

      {/* Menú hamburguesa */}
      <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>

      {/* Menú de navegación */}
      <nav className={`nav ${isMenuOpen ? 'show' : ''}`}>
        <ul>
          <li>
            <Link
              to="/"
              className={location.pathname === '/' ? 'active' : ''}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className={location.pathname === '/products' ? 'active' : ''}
              onClick={closeMenu}
            >
              Productos
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === '/about' ? 'active' : ''}
              onClick={closeMenu}
            >
              Sobre nosotros
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={location.pathname === '/contact' ? 'active' : ''}
              onClick={closeMenu}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>

      {/* Carrito de compras */}
      <div className="cart-icon">
        <Link to="/cart" onClick={closeMenu}>
          <span role="img" aria-label="cart">🛒</span>
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>} {/* Muestra el contador de productos en el carrito */}
        </Link>
      </div>
    </header>
  );
};

export default Header;
