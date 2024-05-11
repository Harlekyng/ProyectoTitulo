import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { AuthProvider } from './context/AuthContext'; // Asegúrate de que la ruta es correcta
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);

