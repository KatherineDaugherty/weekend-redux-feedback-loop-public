import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//Don't need an object for everything... 
//if you do an object make sure to know the keys first
const feedbackObject = {
    feeling: " ",
    understanding: "",
    support: " ",
    comments: " "
}


//REDUCERS
//form Reducer ALL ACTIONS 
const formReducer = (state = feedbackObject, action) => {
    if (action.type === "ADD_FEELING") {
        //Do stuff.. return a new object
        //... spread and set the specified key and set to payload
        return { ...state, feeling: action.payload };
    }
    else if (action.type === "ADD_UNDERSTANDING") {
        return { ...state, understanding: action.payload };
    }
    else if (action.type === "ADD_SUPPORT") {
        return { ...state, support: action.payload };
    }
    else if (action.type === "ADD_COMMENTS") {
        return { ...state, comments: action.payload };
    }
    else if (action.type === "CLEAR") {
        return feedbackObject;
    }
    return state;
};

// NEW REDUCER FOR EACH PAGE is an option .. 
// const understanding = (state = 0, action) => {
//     switch (action.type) {
//         case 'SET_FEELING':
//             return action.payload;
//             case 'RESET_FEEDBACK';
//             return 0;
//         default:
//             return state
//     }
// };

//STORE 
const storeInstance = createStore(
    combineReducers({
        formReducer
    }),
    applyMiddleware(logger)
);

//Provider for redux and react to communicate 
ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
