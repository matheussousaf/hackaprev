import React, {createContext, useContext, useState} from 'react';
import {Auth} from '../models/Auth';
import {createCoreService} from '../services/coreService';
import {UserRegister} from '../models/User';

// import { Container } from './styles';

const AuthContext = createContext({} as Auth);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState(null);
  const coreApi = createCoreService('https://prevgo-api.herokuapp.com');

  async function login(email: string, password: string) {
    console.log(email, password);
    const returnedUser = await coreApi.post('/user/login', {
      email: email,
      password: password,
    });

    setUser(returnedUser);
    return returnedUser;
  }

  function logout() {
    setUser(null);
    console.log(user);
  }

  async function register(registerUser: UserRegister) {
    const returnedUser = await coreApi.post('/user/register', {
      email: registerUser.email,
      username: registerUser.firstName.toLowerCase() + '-explorer',
      firstName: registerUser.firstName,
      password: registerUser.password,
    });

    setUser(returnedUser);
    return returnedUser;
  }

  return (
    <AuthContext.Provider value={{user, login, register, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
