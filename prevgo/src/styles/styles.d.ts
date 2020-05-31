import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
      secondary: string;
      white: string;
      black: string;
    };
  }
}
