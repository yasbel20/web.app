import { useState } from 'react';
import "./login.css";
import { validateUser } from '../service/login'; 
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita la recarga del formulario

    // Validación básica
    if (!email || !contraseña) {
      setError('Por favor ingresa todos los campos.');
      return;
    }

    // Llamar a la función de validación
    const result = await validateUser(email, contraseña);

    if (result.success) {
      setSuccess(true);
      setError('');
      console.log('Login exitoso. ID de usuario:', result.userId);
      navigate('/camilo');
      // Redirige o muestra un mensaje de éxito aquí, por ejemplo:
      // navigate('/dashboard'); // Si usas react-router
    } else {
      setSuccess(false);
      setError(result.message); // Muestra el error (usuario no encontrado o contraseña incorrecta)
    }
  };


  return (
    <div className="login-page">

      <form className="login-container" onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>
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
          Ingresar
        </button>
      </form>
    </div>
  );
}

export default Login;
