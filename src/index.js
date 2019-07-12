import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import { login }  from './redux/auth/reducers'
import * as serviceWorker from './serviceWorker';

const store = createStore(
    login,
    undefined,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
,
document.getElementById('root')
);

serviceWorker.unregister();
