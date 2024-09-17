import React from 'react';
import NavBar from './Navbar';

const Home = () => {
  return (
    <div>
      <NavBar />
      <header className="jumbotron my-4">
        <h1 className="display-3">Bienvenido al Patronato de Rehabilitación de Inválidos</h1>
        <p className="lead">Comprometidos con tu bienestar y recuperación.</p>
        <a href="https://www.facebook.com/glen.ihri.7/?_rdr" className="btn btn-primary btn-lg">Visítanos en Facebook</a>
      </header>
      <div className="container">
        <section className="my-4">
          <h2>Nuestros Servicios</h2>
          <ul>
            <li>Terapia Física</li>
            <li>Terapia Ocupacional</li>
            <li>Asesoramiento Psicológico</li>
            <li>Programas de Rehabilitación</li>
          </ul>
        </section>
        <section className="my-4">
          <h2>Testimonios</h2>
          <blockquote className="blockquote">
            <p className="mb-0">"Gracias al patronato, he recuperado mi movilidad y mi independencia."</p>
            <footer className="blockquote-footer">Juan Pérez</footer>
          </blockquote>
          <blockquote className="blockquote">
            <p className="mb-0">"El apoyo y la dedicación del equipo son inigualables."</p>
            <footer className="blockquote-footer">María López</footer>
          </blockquote>
        </section>
        <section className="my-4">
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
      </div>
    </div>
  );
};

export default Home;
