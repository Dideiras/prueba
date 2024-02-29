import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="app">
      <header className="header">
        <h1>Bienvenido al Casino</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/">Inicio</Link></li>
            <li><a href="#" className="text-white">Juegos</a></li>
            <li><a href="#" className="text-white">Promociones</a></li>
            <li><a href="#" className="text-white">Soporte</a></li>
            <li><Link to="/contact">Contacto</Link></li>
          </ul>
        </nav>
      </header>
      <main className="py-6">
        <div class="login-container">
          <h2>Ingresa a tu cuenta</h2>
          <form>
            <div class="input-group">
              <label for="username">Usuario:</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div class="input-group">
              <label for="password">Contraseña:</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit" class="login-btn">Iniciar sesión</button>
          </form>
          <p>¿No tienes cuenta? <a href="#">Regístrate</a></p>
        </div>
        <div class="content-container">
          <section className="container mx-auto">
            <h2 className="text-2xl font-bold mb-6">Juegos Destacados</h2>
            <div className="game-list grid grid-cols-2 gap-4">
              <div className="game-item bg-white rounded-lg shadow-md p-4">
                <img src="imagen_juego_1.jpg" alt="Juego 1" className="w-full h-64 object-cover mb-4 rounded" />
                <h3 className="text-xl font-bold">Juego 1</h3>
                <p className="text-gray-700 mb-4">Descripción del Juego</p>
                <button className="btn">¡Jugar Ahora!</button>
              </div>
              <div className="game-item">
                <img src="imagen_juego_2.jpg" alt="Juego 2" />
                <h3>Juego 2</h3>
                <p>Descripción del Juego 2</p>
                <button className="btn">¡Jugar Ahora!</button>
              </div>
              {/* Agregar más juegos aqui */}
            </div>
          </section>
          <section className="section">
            <h2>Promociones</h2>
            <div className="promotion-list">
              <div className="promotion-item">
                <h3>Promoción 1</h3>
                <p>Descripción de la Promoción 1</p>
                <button className="btn">¡Ver Más!</button>
              </div>
              <div className="promotion-item">
                <h3>Promoción 2</h3>
                <p>Descripción de la Promoción 2</p>
                <button className="btn">¡Ver Más!</button>
              </div>
              {/* Agregar más promociones aqu */}
            </div>
          </section>
        </div>
      </main>
      <div class="chatbot-container">
        <p>chatbot</p>
      </div>
      <footer>
        <p>© 2024 Casino. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;