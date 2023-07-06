import React from 'react';
import ReactDOM from 'react-dom/client';
import { Dashboard } from './containers/Dashboard';
import { GlobalStyle } from './styles/global.ts';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.ts';
import { AppProvider } from './hooks/index.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppProvider>
        <GlobalStyle />
        <Dashboard />
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
