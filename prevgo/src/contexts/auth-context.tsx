import React, {createContext, useContext, useState} from 'react';
import {Auth} from '../models/Auth';
import {User} from 'src/models/User';

// import { Container } from './styles';

const AuthContext = createContext({} as Auth);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState({} as User | null);

  function login() {
    console.log('Login');
  }

  function register() {
    console.log('Registro');
  }

  return <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
