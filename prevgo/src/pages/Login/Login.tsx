import React from 'react';
import {View, Text} from 'react-native';
import {Link} from '@react-navigation/native';

// import { Container } from './styles';

const Login: React.FC = () => {
  return (
    <View>
      <View>
        <Text>Login</Text>
        <Link to="/Register">Registrar</Link>
      </View>
    </View>
  );
};

export default Login;
