import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';
import {ThemeProvider} from 'react-jss';
import theme from './cliente/layout/theme';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig'

const firebaseApp = firebase.initializeApp(firebaseConfig);

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

const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(App);

