import React, { useEffect, useState, useContext } from 'react';
import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getUserInfoFromToken } from '../utils/authUtils';
import Logout from './Logout';
import { ROLES, URL_PATH, TRANSLATIONS } from '../configs/constants'; 
import { LanguageContext } from '../helpers/LanguageContext';

function User() {
  const [userInfo, setUserInfo] = useState({});
  const nav = useNavigate();
  const isManager = userInfo.role === ROLES.MANAGER;
  const { language } = useContext(LanguageContext);

  const handleManagerClick = () => {
    nav(URL_PATH.MANAGER);
  };

  useEffect(() => {
    const userInfoFromToken = getUserInfoFromToken();
    if (userInfoFromToken) {
      setUserInfo(userInfoFromToken);
    }
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <Typography variant="h3">{TRANSLATIONS[language].welcome}</Typography>
      <Typography variant="subtitle1">
        {TRANSLATIONS[language].username}: {userInfo.sub}
      </Typography>
      <Typography variant="subtitle1">
        {TRANSLATIONS[language].name}: {userInfo.name}
      </Typography>
      <Typography variant="subtitle1">
        {TRANSLATIONS[language].role}: {userInfo.role}
      </Typography>
      {isManager && (
        <Button 
          variant="outlined" 
          color="primary" 
          style={{ marginRight: '10px' }} 
          onClick={handleManagerClick}>
          {TRANSLATIONS[language].goToManager}
        </Button>
      )}
      <Logout/>
    </div>
  );
}

export default User;
