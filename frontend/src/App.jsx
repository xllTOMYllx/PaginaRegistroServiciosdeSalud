import { useState } from 'react';
import RegisterForm from './components/RegisterForm';
import Sesion from './components/sesion';
import Home from './components/Home';

function App() {
  const [view, setView] = useState('register'); // 'register', 'login', 'home'

  return (
    <div className="p-4">
      <div className="d-flex justify-content-center mb-4">
        <button
          className={`btn me-2 ${view === 'register' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setView('register')}
        >
          Registro
        </button>
        <button
          className={`btn me-2 ${view === 'login' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setView('login')}
        >
          Iniciar Sesión
        </button>
        <button
          className={`btn ${view === 'home' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setView('home')}
        >
          Home
        </button>
      </div>
      {view === 'register' && <RegisterForm />}
      {view === 'login' && <Sesion />}
      {view === 'home' && <Home />}
    </div>
  );
}

export default App;