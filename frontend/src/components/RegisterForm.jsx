import { useState } from 'react';
import axios from 'axios';

function RegisterForm() {
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    NOMBRE: '',
    APELLIDO_PATERNO: '',
    APELLIDO_MATERNO: '',
    CURP: '',
    CORREO: '',
    USUARIO: '',
    CONTRASEÑA: '',
    RFC: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje('');
    setError('');
    try {
      const response = await axios.post('http://localhost:3000/api/register', formData);
      setMensaje('Usuario registrado correctamente');
      setError('');
      // Opcional: limpiar el formulario
      setFormData({
        NOMBRE: '',
        APELLIDO_PATERNO: '',
        APELLIDO_MATERNO: '',
        CURP: '',
        CORREO: '',
        USUARIO: '',
        CONTRASEÑA: '',
        RFC: ''
      });
    } catch (error) {
      setMensaje('');
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError('Fallo en el registro');
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Mapear los nombres del input a los nombres esperados por el backend
    const nameMap = {
      name: 'NOMBRE',
      apellidoPaterno: 'APELLIDO_PATERNO',
      apellidoMaterno: 'APELLIDO_MATERNO',
      curp: 'CURP',
      email: 'CORREO',
      usuario: 'USUARIO',
      password: 'CONTRASEÑA',
      rfc: 'RFC'
    };
    setFormData({ ...formData, [nameMap[name]]: value });
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
              value={formData.NOMBRE}
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
              value={formData.APELLIDO_PATERNO}
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
              value={formData.APELLIDO_MATERNO}
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
              value={formData.CURP}
              onChange={handleChange}
              placeholder="Ingresa tu CURP"
              className="form-control rounded-3"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">RFC</label>
            <input
              type="text"
              name="rfc"
              value={formData.RFC}
              onChange={handleChange}
              placeholder="Ingresa tu RFC"
              className="form-control rounded-3"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Correo Electrónico</label>
            <input
              type="email"
              name="email"
              value={formData.CORREO}
              onChange={handleChange}
              placeholder="Ingresa tu correo electrónico"
              className="form-control rounded-3"
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Usuario</label>
            <input
              type="text"
              name="usuario"
              value={formData.USUARIO}
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
              value={formData.CONTRASEÑA}
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
          {mensaje && <div className="alert alert-success mt-3 text-center">{mensaje}</div>}
          {error && <div className="alert alert-danger mt-3 text-center">{error}</div>}
        </form>
        <button type="button" className="btn btn-primary w-100 rounded-3 mt-2" 
          style= {{ backgroundColor: '#7A1737', borderColor: '#7A1737'}}>
            Inicia Sesión
        </button>
        <p className="text-center text-muted mt-4 small"></p>
      </div>
    </div>
  );
}

export default RegisterForm;
