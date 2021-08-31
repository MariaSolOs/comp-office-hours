import React from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createTheme({
    overrides: {
        MuiCssBaseline: {
            '@global': {
                body: {
                    fontFamily: 'Montserrat, sans-serif'
                }
            }
        }
    },
    
    typography: {
        fontFamily: ['Montserrat', 'sans-serif'].join(', ')
    }
});

const GlobalStyles: React.FC = (props) => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
    </ThemeProvider>
);

export default GlobalStyles;