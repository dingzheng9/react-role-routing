// import React from 'react';

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return !!token;
};

const PrivateRoute = ({ element, allowedRoles, userRole }) => {
  if (!isAuthenticated()) {
    console.log("Authentication failed. User not logged in.");
  }

  if (!userRole || !allowedRoles.includes(userRole)) {
    console.log("Your role doesn't have access.")
  }

  return element;
};

export default PrivateRoute;
