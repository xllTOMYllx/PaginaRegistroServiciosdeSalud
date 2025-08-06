import { useState } from 'react';
import axios from 'axios';

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    curp: '',
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/register', formData);
      console.log('Usuario registrado:', response.data);
    } catch (error) {
      console.error('Fallo en el registro:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="p-4 rounded-4 shadow bg-white" style={{ width: '100%', maxWidth: '600px' }}>

        <h4 className="text-center mb-3" style={{ color: '#7A1737', fontSize: '30px' }}> CREACIÓN DE CUENTA</h4>

        <form onSubmit={handleSubmit} >
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ingresa tu nombre"
              className="form-control rounded-3"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Apellido Paterno</label>
            <input
              type="text"
              name="apellidoPaterno"
              value={formData.apellidoPaterno}
              onChange={handleChange}
              placeholder="Ingresa tu apellido paterno"
              className="form-control rounded-3"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Apellido Materno</label>
            <input
              type="text"
              name="apellidoMaterno"
              value={formData.apellidoMaterno}
              onChange={handleChange}
              placeholder="Ingresa tu apellido materno"
              className="form-control rounded-3"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">CURP</label>
            <input
              type="text"
              name="curp"
              value={formData.curp}
              onChange={handleChange}
              placeholder="Ingresa tu CURP"
              className="form-control rounded-3"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Correo Electrónico</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ingresa tu correo electrónico"
              className="form-control rounded-3"
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Usuario</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Ingresa tu usuario"
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
              placeholder="Ingresa tu contraseña"
              className="form-control rounded-3"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 rounded-3" 
          style= {{ backgroundColor: '#7A1737', borderColor: '#7A1737'}}>
            Registrar
          </button>
          <p className="text-center mt-3">¿Ya tienes una cuenta?</p>
        </form>
        <button type="submit" className="btn btn-primary w-100 rounded-3" 
        onClick={() => window.location.href = '/sesion.jsx'} 
          style= {{ backgroundColor: '#7A1737', borderColor: '#7A1737'}}>
            Inicia Sesión
          </button>

        <p className="text-center text-muted mt-4 small"></p>
      </div>
    </div>
  );
}

export default RegisterForm;
