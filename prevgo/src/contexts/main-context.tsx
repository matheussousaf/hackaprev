import React, {createContext, useContext, useState} from 'react';
import {Auth} from '../models/Auth';
import {User} from 'src/models/User';

// import { Container } from './styles';

const MainContext = createContext({} as Auth);

export const MainProvider: React.FC = ({children}) => {
  //   const [user, setUser] = useState({} as User | null);
  //   function x() {
  //     console.log('Massa');
  //   }
  //   return <MainContext.Provider value={{user}}>{children}</MainContext.Provider>;
  return <></>;
};

export const useMainContext = () => useContext(MainContext);
