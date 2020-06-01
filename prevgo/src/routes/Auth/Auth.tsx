import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import {StatusBar} from 'react-native';
import {LightColors} from '../../styles/main-theme';

const Stack = createStackNavigator();

const AuthRoute: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor={LightColors.main} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default AuthRoute;
