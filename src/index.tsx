import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from './components';
import { Provider } from './store/context';
import { lightTheme } from './styles/theme';

render(
    <ThemeProvider theme={lightTheme}>
        <Provider>
            <App/>
        </Provider>
    </ThemeProvider>
    , document.getElementById('root')
);
