// import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

// export const store = configureStore({ reducer: rootReducer });
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware),

    //For working redux dev tools in chrome (https://github.com/zalmoxisus/redux-devtools-extension)
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
      : function (f) {
          return f;
        }
  )
);

export default store;
