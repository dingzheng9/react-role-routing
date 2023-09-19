import jwt_decode from 'jwt-decode';

export const getUserInfoFromToken = () => {
  const token = localStorage.getItem('token');
  if (token) {
    try {
      const userInfo = jwt_decode(token);
      return userInfo;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }
  return null;
};