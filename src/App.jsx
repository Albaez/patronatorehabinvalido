
import React from 'react';
import Footer from './components/Footer'; // Importa el componente Footer
import NavBar from './components/Navbar'; // Importa el componente NavBar

const App = () => {
  return (
    <div className="container">
      <NavBar/> 
      <header className="my-4">
        <h1>Bienvenido al Patronato de Rehabilitación de Inválidos</h1>
        <p>Comprometidos con tu bienestar y recuperación</p>
      </header>
      <section>
        <h2>Nuestros Servicios</h2>
        <ul>
          <li>Terapia Física</li>
          <li>Terapia Ocupacional</li>
          <li>Asesoramiento Psicológico</li>
          <li>Programas de Rehabilitación</li>
        </ul>
      </section>
      <section>
        <h2>Testimonios</h2>
        <blockquote>
          <p>"Gracias al patronato, he recuperado mi movilidad y mi independencia."</p>
          <footer>- Juan Pérez</footer>
        </blockquote>
        <blockquote>
          <p>"El apoyo y la dedicación del equipo son inigualables."</p>
          <footer>- María López</footer>
        </blockquote>
      </section>
      <section>
        <h2>Contacto</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input type="text" className="form-control" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" className="form-control" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea className="form-control" id="message" name="message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </section>
      <Footer /> {/* Usa el componente Footer */}
    </div>
  );
};

export default App;
