import React from 'react';
import ReactDOM from 'react-dom/client';

import { GlobalStyle } from './styles/global.ts';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.ts';
import { AppProvider } from './hooks/index.tsx';
import { Router } from './routes/index.tsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <AppProvider>
                    <Router />
                </AppProvider>
            </BrowserRouter>
            <GlobalStyle />
        </ThemeProvider>
    </React.StrictMode>,
);
