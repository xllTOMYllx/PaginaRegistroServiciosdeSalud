import { useState } from 'react';
import RegisterForm from './components/RegisterForm';
import Sesion from './components/sesion';

function App() {
  const [showRegister, setShowRegister] = useState(true);

  return (
    <div className="p-4">
      <div className="d-flex justify-content-center mb-4">
        <button
          className={`btn me-2 ${showRegister ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setShowRegister(true)}
        >
          Registro
        </button>
        <button
          className={`btn ${!showRegister ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setShowRegister(false)}
        >
          Iniciar Sesión
        </button>
      </div>
      {showRegister ? <RegisterForm /> : <Sesion />}
    </div>
  );
}

export default App;