import React, { useState, useContext } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
   BACKEND_API_BASE_URL,
   AUTHENTICATION_ENDPOINT,
   INVALID_CREDENTIALS_ERROR,
   GENERIC_ERROR,
   TRANSLATIONS, 
  } 
   from '../configs/constants';
import { LanguageContext } from '../helpers/LanguageContext';

const apiUrl = `${BACKEND_API_BASE_URL}${AUTHENTICATION_ENDPOINT}`;


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { language, setLanguage } = useContext(LanguageContext);

  const nav = useNavigate(); 

  const handleLogin = () => {
    const requestBody = {
      username: username,
      password: password,
    };

    // Clear previous error message
    setError(null);

    axios
      .post(apiUrl, requestBody, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log('Login successful:', response.data);

        // Store the JWT token in localStorage
        localStorage.setItem('token', response.data.token);
        nav('/welcome')
      })
      .catch((error) => {
        console.error('Login failed:', error);
        // Check if the error status code is 401 (Unauthorized)
        if (error.response && error.response.status === 401) {
          setError(INVALID_CREDENTIALS_ERROR);
        } else {
          setError(GENERIC_ERROR);
        }
      });
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'cn' : 'en'));
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Button onClick={toggleLanguage}>{TRANSLATIONS[language].toggle}</Button>
      <h2>{TRANSLATIONS[language].login}</h2>
      <TextField
        label={TRANSLATIONS[language].username}
        variant="outlined"
        fullWidth
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ marginBottom: '10px', width: 200 }}
      />
      <br />
      <TextField
        label={TRANSLATIONS[language].password}
        variant="outlined"
        type="password"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: '10px', width: 200 }}
      />
      <br />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        {TRANSLATIONS[language].login}
      </Button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Login;
