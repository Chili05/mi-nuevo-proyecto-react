import React from 'react';
import '../styles/Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Columna de links */}
        <div className="footer-section">
          <h4>Acerca de</h4>
          <ul>
            <li><a href="/">Quiénes somos</a></li>
            <li><a href="/">Términos y condiciones</a></li>
            <li><a href="/">Política de privacidad</a></li>
            <li><a href="/">Contactar</a></li>
          </ul>
        </div>

        {/* Columna de redes sociales */}
        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-media">
            <a href="/" className="social-icon">FB</a>
            <a href="/" className="social-icon">IG</a>
            <a href="/" className="social-icon">X</a>
            <a href="/" className="social-icon">YT</a>
          </div>
        </div>

        {/* Columna de suscripción */}
        <div className="footer-section">
          <h4>Suscríbete a nuestro boletín</h4>
          <form className="newsletter-form">
            <input type="email" placeholder="Tu correo electrónico" required />
            <button type="submit">Suscribirse</button>
          </form>
        </div>
      </div>

      {/* Créditos y derechos */}
      <div className="footer-bottom">
        <p>&copy; 2024 Malva. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
