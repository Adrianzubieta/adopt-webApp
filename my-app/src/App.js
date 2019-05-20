import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';
import {ThemeProvider} from 'react-jss';
import theme from './cliente/layout/theme';

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes/>
                </BrowserRouter>
            </ThemeProvider>
        );
    }
}

export default App;
