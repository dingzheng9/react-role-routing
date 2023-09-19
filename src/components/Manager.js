import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { getUserInfoFromToken } from '../utils/authUtils';
import logo from '../logo.svg';
import Logout from './Logout';

function Manager() {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const userInfoFromToken = getUserInfoFromToken();
    if (userInfoFromToken) {
      setUserInfo(userInfoFromToken);
    }
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <Typography variant="h4">This is a restricted view!</Typography> 
      <Typography variant="h5">Welcome, Manager {userInfo.name}.</Typography> 
      <img src={logo} className="App-logo" alt="logo" />
      <Logout/>
    </div>
  );
}

export default Manager;
