import { useState } from 'react';
import axios from 'axios';

function Sesion() {
  const [formData, setFormData] =useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/sesion', formData);
      console.log('sesion iniciada:', response.data);
    } catch (error) {
      console.error('Fallo al iniciar sesion :', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="p-4 rounded-4 shadow bg-white" style={{ width: '100%', maxWidth: '420px' }}>
        <h4 className="text-center mb-3">INICIAR SESIÓN</h4>
        <form onSubmit={handleSubmit}>
  
            <div className="mb-3">
            <label className="form-label">Correo Electrónico</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control rounded-3"
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              className="form-control rounded-3"
              required
            />
          </div>
         <button type="submit" className="btn btn-primary w-100 rounded-3">
            Inciar Sesión
          </button>
        </form>

         <p className="text-center text-muted mt-4 small"></p>
        </div>
        </div>
        
    );
}

export default Sesion;
