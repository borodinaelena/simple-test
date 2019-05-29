import "regenerator-runtime/runtime";
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import { articleSaga } from '../sagas'

import rootReducer from "../reducers";

const loggerMiddleware = createLogger();

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            loggerMiddleware,
            sagaMiddleware
        )
    )
);

sagaMiddleware.run(articleSaga)

