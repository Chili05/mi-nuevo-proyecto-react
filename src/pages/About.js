import React from 'react';
import '../styles/About.css'; 
import productImage1 from '../assets/images/product1_hombre.jpg';  
import productImage2 from '../assets/images/product2_mujer.jpg'; 
import sustainabilityImage from '../assets/images/product1.jpg';  

const About = () => {
  return (
    <div className="about-page">
      <h1>Quiénes Somos</h1>
      
      {/* Sección de Introducción */}
      <section className="about-intro">
        <div className="about-text">
          <p>
            En Malva creemos que el estilo es una construcción y una alquimia de piezas que definen quiénes somos. Porque más allá de lo que te pongas, siempre será tu momento.
          </p>
          <p>
            Tenemos alma de curador. Un ojo especial que va seleccionando piezas para combinar y sumar, donde el equilibrio es exquisito y siempre está presente, donde la combinación precisa hace que el conjunto tenga más valor que la individualidad.
          </p>
        </div>
        <div className="about-image">
          <img src={productImage1} alt="Producto destacado de Malva Edition" className="about-image-small" />
        </div>
      </section>

      {/* Sección de Malva Edition */}
      <section className="about-malva-edition">
        <div className="about-image">
          <img src={productImage2} alt="Producto destacado de la colección" className="about-image-small" />
        </div>
        <div className="about-text">
          <h2>Malva Edition</h2>
          <p>
            Malva Edition son piezas únicas y exclusivas realizadas en colaboración con nuestros diseñadores y marcas. Son colecciones únicas que fusionan el ADN del diseñador con el gran universo Malva.
          </p>
          <p>
            Estas colecciones solo las encontrarás en Malva, son colecciones con una propuesta innovadora y altamente creativa.
          </p>
        </div>
      </section>

      {/* Sección de Sostenibilidad */}
      <section className="about-sustainability">
        <div className="about-text">
          <h2>Sostenibilidad</h2>
          <p>
            Para Malva es importante apoyar las iniciativas y apoyar las acciones sostenibles de las marcas y diseñadores que implementen estas prácticas.
          </p>
          <p>
            A fin de lograr este objetivo, Malva prioriza el uso de materiales orgánicos o reciclados, la reducción de residuos, el consumo de energía y la garantía de prácticas laborales justas.
          </p>
          <p>
            Al implementar estas iniciativas y hacer de la sustentabilidad un pilar importante dentro de nuestros valores, Malva se convierte en embajador y apoyo para que la moda deje una huella positiva en el mundo.
          </p>
        </div>
        <div className="about-image">
          <img src={sustainabilityImage} alt="Iniciativas de sostenibilidad" className="about-image-small" />
        </div>
      </section>
    </div>
  );
};

export default About;
