import React from 'react';
import './App.css';
import './styles/Responsive.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Products from './pages/Products';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; 

const App = () => {
  return (
    <CartProvider> {/* Envuelve toda la aplicación con CartProvider para poder acceder al carrito en cualquier componente */}
      <Router> {/* Configura el enrutamiento de React */}
        <Header /> {/* El header estará disponible en todas las páginas */}
        
        <main>
          <Routes>
            {/* Rutas de las páginas principales */}
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} /> {/* Ruta para la página del carrito */}
            <Route path="/about" element={<About />} /> {/* Ruta para la página "Sobre Nosotros" */}
            <Route path="/contact" element={<Contact />} /> {/* Ruta para la página de contacto */}
            
            {/* Ruta para página no encontrada */}
            <Route path="*" element={<HomePage />} /> {/* Redirige a la página principal si la ruta no es válida */}
          </Routes>
        </main>
        
        <Footer /> {/* El footer estará disponible en todas las páginas */}
      </Router>
    </CartProvider>
  );
};

export default App;
