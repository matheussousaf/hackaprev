import React from 'react';
import AuthRoute from './Auth/Auth';
import {useAuthContext} from '../contexts/auth-context';
import MainRoute from './Main/Main';

const Routes: React.FC = () => {
  const {user} = useAuthContext();

  return user ? <MainRoute /> : <AuthRoute />;
};

export default Routes;
