import React, { useEffect, useState } from 'react';
import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getUserInfoFromToken } from '../utils/authUtils';
import Logout from './Logout';
import { ROLES, URL_PATH } from '../configs/constants';

function User() {
  const [userInfo, setUserInfo] = useState({});
  const nav = useNavigate();
  const isManager = userInfo.role === ROLES.MANAGER;

  const handleManagerClick = () => {
    nav(URL_PATH.MANAGER)
  };

  useEffect(() => {
    const userInfoFromToken = getUserInfoFromToken();
    if (userInfoFromToken) {
      setUserInfo(userInfoFromToken);
    }
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <Typography variant="h4">Welcome!</Typography> {/* Use Typography for heading */}
      <Typography variant="subtitle1">Username: {userInfo.sub}</Typography> {/* Use Typography for text */}
      <Typography variant="subtitle1">Name: {userInfo.name}</Typography>
      <Typography variant="subtitle1">Role: {userInfo.role}</Typography>
      {isManager && (
        <Button variant="outlined" color="primary" style={{ marginRight: '10px' }} onClick={handleManagerClick}>Go to Manager Page</Button>
      )}
      <Logout/>
    </div>
  );
}

export default User;
