import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import {AuthProvider} from '../../contexts/auth-context';

const Stack = createStackNavigator();

const AuthRoute: React.FC = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default AuthRoute;
