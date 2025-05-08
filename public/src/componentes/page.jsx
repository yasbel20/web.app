import React, { useState, useEffect } from 'react';
import '../page.css';
import camiloMeme from './img/perro.gif';
import moneda from './img/moneda.png';
import ajustes from './img/ajustes.png';
import diamante from './img/diamante.png';
import perfil from './img/usuario.png';
import alimento from './img/alimentra.png';
import bañar from './img/bañar.png';
import pasea from './img/pasear.png';
import avatar from './img/avatar.png';

function App() {

  const [menuAbierto, setMenuAbierto] = useState(false);
  const [gemas, setGemas] = useState(0); // inicial, editable

  const toggleAjustes = () => {
    setMenuAbierto(prev => !prev);
  };

  const [sonidoActivo, setSonidoActivo] = useState(true);
  const [idioma, setIdioma] = useState('es'); // 'es' para español, 'en' para inglés

  const reiniciarJuego = () => {
    setSalud(50);
    setFelicidad(50);
    setMonedas(0);
  };
  const toggleSonido = () => {
    setSonidoActivo(prev => !prev);
  };

  const toggleIdioma = () => {
    setIdioma(prev => (prev === 'es' ? 'en' : 'es'));
  };


  const verAvatar = () => {
    alert("🧍 Este es Camilo Meme, tu mascota virtual 🐶");
  };
  const usuario = {
    nombre: 'player ',
    perfil: '/img/usuario.png',
  };


  return (
    <div className="app">
      <div className="top-bars">
        <div className="player-info">
          <img className="player-avatar" src={perfil} alt="Avatar" />
          <span className="player-name">{usuario.nombre}</span>
        </div>

        <div className="resources">
          <div className="resource">
            <img src={diamante} alt="Gemas" />
            <span>{gemas}</span>

          </div>
          <div className="resource">
            <img src={moneda} alt="Monedas" />
            <span>0</span>
          </div>
        </div>

        <div className="ajustes">
          <button className="ajustes-btn" onClick={toggleAjustes}>
            <img src={ajustes} alt="Ajustes" />
          </button>
        </div>
      </div>

      <h1 className="nombre">🐶 <span>Camilo Meme</span></h1>

      {/* Tarjeta del personaje estilo Clash Royale */}
      <div className="avatar-card">
        <img src={camiloMeme} alt="Camilo Meme" className="camilo-imagen" />
      </div>

      <div className="botones">
        <button onClick={alimento} className="boton">
          <img src={alimento} className="boton-img" /> Alimentar
          <span className="notificacion">1</span>
        </button>
        <button onClick={bañar} className="boton">
          <img src={bañar} className="boton-img" /> Bañar
          <span className="notificacion">9</span>
        </button>
        <button onClick={pasea} className="boton">
          <img src={pasea} className="boton-img" /> Pasear
          <span className="notificacion">9</span>
        </button>
        <button onClick={avatar} className="boton">
          <img src={avatar} className="boton-img" /> Avatar
          <span className="notificacion">9</span>
        </button>
      </div>

      {menuAbierto && (
        <div className="ajustes-menu-overlay">
          <div className="ajustes-menu">
            <h2>⚙️ {idioma === 'es' ? 'Ajustes' : 'Settings'}</h2>
            <ul>
              <li>
                <button onClick={reiniciarJuego}>
                  🔁 {idioma === 'es' ? 'Reiniciar juego' : 'Reset Game'}
                </button>
              </li>
              <li>
                <button onClick={toggleSonido}>
                  {sonidoActivo ? '🔊' : '🔇'} {idioma === 'es' ? 'Sonido' : 'Sound'}
                </button>
              </li>
              <li>
                <button onClick={toggleIdioma}>
                  🌐 {idioma === 'es' ? 'Idioma: Español' : 'Language: English'}
                </button>
              </li>
              <li>
                <button onClick={toggleAjustes}>
                  ❌ {idioma === 'es' ? 'Cerrar' : 'Close'}
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;




