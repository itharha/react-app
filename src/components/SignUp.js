import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../App.css';
import { useUserContext } from '../UserContext'; 

const SignUp = () => {
  const { users, setUsers } = useUserContext();  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    setError('');

   
    if (firstName === '' || lastName === '' || password === '' || confirmPassword === '') {
      setError('Veuillez remplir tous les champs.');
      return;
    }


    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }


    const newUser = { 
      firstName, 
      lastName, 
      password, 
      email: firstName.toLowerCase() + '@example.com' 
    };
    setUsers([...users, newUser]);

    
    setFirstName('');
    setLastName('');
    setPassword('');
    setConfirmPassword('');

    alert(`Inscription réussie pour : ${firstName} ${lastName}`);
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <div className="input-group">
          <label>Prénom :</label>
          <input
            type="text"
            placeholder="Entrez votre prénom"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Nom :</label>
          <input
            type="text"
            placeholder="Entrez votre nom"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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

        <div className="input-group">
          <label>Confirmer le mot de passe :</label>
          <input
            type="password"
            placeholder="Confirmez votre mot de passe"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default SignUp;

