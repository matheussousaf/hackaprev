/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {mainTheme} from './styles/main-theme';
import {ThemeProvider} from 'styled-components';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <Routes />
      </ThemeProvider>
    </>
  );
};

export default App;
