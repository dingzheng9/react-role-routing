// API endpoint for authentication
export const BACKEND_API_BASE_URL = 'http://localhost:8080/api';
export const AUTHENTICATION_ENDPOINT = '/auth/login';

// Error messages
export const INVALID_CREDENTIALS_ERROR = 'Invalid username or password';
export const GENERIC_ERROR = 'An error occurred while logging in';

export const ROLES = {
  MANAGER: 'Manager',
  USER: 'User',
}

export const URL_PATH = {
  LOGIN: '/login',
  MANAGER: '/manager',
  WELCOME: '/welcome',
}
