// API endpoint for authentication
export const BACKEND_API_BASE_URL = 'http://localhost:8080/api';
export const AUTHENTICATION_ENDPOINT = '/auth/login';

// Error messages
export const INVALID_CREDENTIALS_ERROR = 'Invalid username or password';
export const GENERIC_ERROR = 'An error occurred while logging in';

export const ROLES = {
  MANAGER: 'Manager',
  USER: 'User',
};

export const URL_PATH = {
  LOGIN: '/login',
  MANAGER: '/manager',
  WELCOME: '/welcome',
};

export const TRANSLATIONS = {
  en: {
    login: 'Login',
    username: 'Username',
    password: 'Password',
    toggle: 'Switch to Chinese',
    welcome: 'Welcome!',
    name: 'Name',
    role: 'Role',
    goToManager: 'Go to Manager Page',
    restrictedView: 'This is a restricted page!',
    welcomeManager: 'Welcome, Manager'
  },
  cn: {
    login: '登录',
    username: '用户名',
    password: '密码',
    toggle: '切换到英语',
    welcome: '欢迎！',
    name: '名字',
    role: '角色',
    goToManager: '转到管理者页面',
    restrictedView: '这是一个受限的页面！',
    welcomeManager: '欢迎，管理者'
  },
};

