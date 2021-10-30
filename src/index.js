import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//REDUCERS
//list Reducer for SUBMIT BUTTON 
const listReducer = (state = [], action) => {
    if (action.type === "ADD_FEEDBACK") {
        return [...state, action.payload];
    }
    return state;
};

//Feeling input 
const feelingReducer = (state = [], action) => {
    if (action.type === "ADD_FEELING") {
        console.log(`the feeling is ${action.payload}`);
        // state.push(action.payload);     
        return [...state, action.payload];
    }
    return state;
}

//STORE 
const storeInstance = createStore(
    combineReducers({
        listReducer,
        feelingReducer
    }),
    applyMiddleware(logger)
);

//Provider for redux and react to communicate 
ReactDOM.render(
    <Provider store={storeInstance}>
        <App />,
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
