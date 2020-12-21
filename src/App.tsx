import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import LandingPage from './features/LandingPage';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
