import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'; // Import your PrivateRoute component
import Login from './components/Login';
import Manager from './components/Manager';
import Welcome from './components/Welcome';
import { getUserInfoFromToken } from './utils/authUtils';
import { ROLES, URL_PATH } from './configs/constants';


function AppRouter() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const userInfoFromToken = getUserInfoFromToken();
    if (userInfoFromToken) {
      setUserInfo(userInfoFromToken);
    }
  }, []);

  return (
    <Routes>
      <Route path= {URL_PATH.LOGIN} element={<Login />} />
      <Route path={URL_PATH.MANAGER} element={<PrivateRoute element={<Manager />} 
      allowedRoles={[ROLES.MANAGER]} userRole={userInfo ? userInfo.role : null}/>} />
      <Route path={URL_PATH.WELCOME} element={<PrivateRoute element={<Welcome />} 
      allowedRoles={[ROLES.MANAGER, ROLES.USER]} userRole={userInfo ? userInfo.role : null}/>} />
      <Route path="*" element={<Navigate to={URL_PATH.LOGIN} />} />
    </Routes>
  );
}

export default AppRouter;
