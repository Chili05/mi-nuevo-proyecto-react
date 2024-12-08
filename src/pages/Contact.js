import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha'; 
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    dni: '',
    pedido: '',
    tipoMensaje: '',
    descripcion: '',
  });

  const [isCaptchaValid, setIsCaptchaValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Verifica la validez del reCAPTCHA
  const handleCaptchaChange = (value) => {
    if (value) {
      setIsCaptchaValid(true);
    } else {
      setIsCaptchaValid(false);
    }
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isCaptchaValid) {
      alert('Por favor, verifica que no eres un robot.');
      return;
    }

    alert('Formulario enviado');

    // Limpiar el formulario después de enviarlo
    setFormData({
      nombre: '',
      apellido: '',
      dni: '',
      pedido: '',
      tipoMensaje: '',
      descripcion: '',
    });
  };

  return (
    <div className="contact-container">
      <h2>Contacto</h2>
      <p>¡Estamos aquí para ayudarte! Completa el formulario a continuación y nos pondremos en contacto contigo.</p>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            placeholder="Escribe tu nombre"
          />
        </div>

        <div className="form-group">
          <label htmlFor="apellido">Apellido:</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
            placeholder="Escribe tu apellido"
          />
        </div>

        <div className="form-group">
          <label htmlFor="dni">DNI:</label>
          <input
            type="text"
            id="dni"
            name="dni"
            value={formData.dni}
            onChange={handleChange}
            required
            placeholder="Escribe tu DNI"
          />
        </div>

        <div className="form-group">
          <label htmlFor="pedido">Número de Pedido:</label>
          <input
            type="text"
            id="pedido"
            name="pedido"
            value={formData.pedido}
            onChange={handleChange}
            required
            placeholder="Escribe el número de tu pedido"
          />
        </div>

        <div className="form-group">
          <label htmlFor="tipoMensaje">Tipo de Mensaje:</label>
          <select
            id="tipoMensaje"
            name="tipoMensaje"
            value={formData.tipoMensaje}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="pregunta">Pregunta</option>
            <option value="queja">Queja</option>
            <option value="sugerencia">Sugerencia</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="descripcion">¿Cómo podemos ayudarte?</label>
          <textarea
            id="descripcion"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            required
            placeholder="Escribe tu mensaje aquí"
          />
        </div>

        {/* Componente de reCAPTCHA */}
        <div className="form-group">
          <ReCAPTCHA
            sitekey="YOUR_RECAPTCHA_SITE_KEY" 
            onChange={handleCaptchaChange}
          />
        </div>

        <button type="submit" className="submit-btn">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
