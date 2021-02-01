import React from 'react';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../src/store/reducers/reducer';
import './index.scss';

import App from './components/app/app';

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
