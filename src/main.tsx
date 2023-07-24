import React from 'react';
import ReactDOM from 'react-dom/client';
import { Dashboard } from './containers/Dashboard';
import { GlobalStyle } from './styles/global.ts';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.ts';
import { AppProvider } from './hooks/index.tsx';
import { Informations } from './containers/Informations/index.tsx';
import { MainContainer } from './styles.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <AppProvider>
                <GlobalStyle />
                <MainContainer>
                    <Dashboard />
                    <Informations />
                </MainContainer>
            </AppProvider>
        </ThemeProvider>
    </React.StrictMode>,
);
