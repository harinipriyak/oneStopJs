import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/root-saga';
import { AppContainer } from 'react-hot-loader';

import reducer from '../js/reducers';
import App from './components/App/index.js';

// ReactDOM.render(<App />, document.getElementById('app')); 
// const store = createStore(reducers);

const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const sagaMiddleware = createSagaMiddleware();
const middlewares = () => {
    return applyMiddleware(sagaMiddleware, routerMiddleware(history));
};

const store = createStore(reducer, composeEnhancers(middlewares()));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <App />
        </Provider>
    </AppContainer>
    , document.getElementById('app')
);