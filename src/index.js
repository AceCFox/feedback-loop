import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feelingReducer = (state = null, action) => {
    if (action.type === 'SET_FEELING'){ 
        return state = action.payload;
    }//end if
    return state;
};//end feelingReduicer

const supportReducer = (state = null, action) => {
    if (action.type === 'SET_SUPPORT'){ 
        return state = action.payload;
    }//end if
    return state;
};//end supportReducer

const understandingReducer = (state = null, action) => {
    if (action.type === 'SET_UNDERSTANDING'){ 
        return state = action.payload;
    }//end if
    return state;
};//end understandingReducer


const storeInstance = createStore(
    combineReducers({
        supportReducer,
        feelingReducer,
        understandingReducer,
    }),   //end combine
    applyMiddleware(logger) 
);//end store

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
        </Provider>,
         document.getElementById('root'));
registerServiceWorker();
