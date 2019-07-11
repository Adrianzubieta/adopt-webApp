import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import { loginApp }  from './reducers/login'
import * as serviceWorker from './serviceWorker';

const store = createStore(
    loginApp,
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
