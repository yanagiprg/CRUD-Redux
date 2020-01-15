import React from 'react';
import ReactDOM from 'react-dom';

// import { Provider } from "react-redux";
import App from './components/App';
// import createStore from './redux/createStore'
import { StoreProvider } from "./crud-useReducer/store";


// const store = createStore()

ReactDOM.render(
  // <Provider store={store}>
  <StoreProvider>
      <App />
  </StoreProvider>
  // </Provider>
  ,
document.getElementById('root'));

