import React, { useEffect, useState, useContext } from 'react';
import { Typography } from '@mui/material';
import { getUserInfoFromToken } from '../utils/authUtils';
import logo from '../logo.svg';
import Logout from './Logout';
import { LanguageContext } from '../helpers/LanguageContext';
import { TRANSLATIONS } from '../configs/constants';

function Manager() {
  const [userInfo, setUserInfo] = useState({});
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const userInfoFromToken = getUserInfoFromToken();
    if (userInfoFromToken) {
      setUserInfo(userInfoFromToken);
    }
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <Typography variant="h4">{TRANSLATIONS[language].restrictedView}</Typography> 
      <Typography variant="h5">{TRANSLATIONS[language].welcomeManager}, {userInfo.name}.</Typography> 
      <img src={logo} className="App-logo" alt="logo" />
      <Logout/>
    </div>
  );
}

export default Manager;
