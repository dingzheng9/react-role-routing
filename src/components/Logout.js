import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { URL_PATH } from '../configs/constants';

function Logout() {
  const nav = useNavigate();

  const handleLogout = () => {
    // Clear the JWT token from localStorage
    localStorage.removeItem('token');

    nav(URL_PATH.LOGIN);
  };

  return (
    <Button variant="outlined" color="primary" onClick={handleLogout}>
      Logout
    </Button>
  );
}

export default Logout;
