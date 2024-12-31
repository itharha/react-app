import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (email === '' || password === '') {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    alert(`Connecté avec l'email : ${email}`);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <h1>Connexion</h1>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label>Email :</label>
          <input
            type="email"
            placeholder="Entrez votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Mot de passe :</label>
          <input
            type="password"
            placeholder="Entrez votre mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="error-message">{error}</p>}

<div className='buttin-container'>

  <button type="submit">Se connecter</button>
  <Link to="/signup" className="button-link">Sign up</Link>
    </div>
      </form>
    </div>
  );
};

export default Login;

