import {DefaultTheme} from 'styled-components';

export const LightColors = {
  main: '#2861a5',
  secondary: '#efc100',
  white: '#e2e2e2',
  black: '#121212',
};

const mainTheme: DefaultTheme = {
  colors: {
    main: LightColors.main,
    secondary: LightColors.secondary,
    white: LightColors.white,
    black: LightColors.black,
  },
};

export {mainTheme};
