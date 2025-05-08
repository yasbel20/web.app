import { useState } from 'react';
import "./login.css";
import {createItem} from '../service/api';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');

  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que el formulario recargue la página
  
    // Validación básica
    if (!email || !contraseña || !nombre) {
      setError('Por favor completa correctamente.');
      return;
    }
  
    try {
      await createItem({ nombre: nombre, email: email, contrasena: contraseña });
      alert('Registro exitosamente');
      navigate('/login'); // Reemplaza con la ruta deseada
    } catch (error) {
      console.error("Error al crear el item:", error);
    }
  };
  
  return (
    <div className="login-page">

      <form  className="login-container" onSubmit={handleSubmit}>
        <h2>Registrarse</h2>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">

          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            required
          />
        </div>
        {error && <div className="text-danger mb-3">{error}</div>}
        <button type="submit" className="btn btn-primary">
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Register;
