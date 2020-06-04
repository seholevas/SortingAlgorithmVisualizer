import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import {createStore} from 'redux';


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);


// STORE => GLOBALIZED STATE
// let store = createStore

// ACTION =>



// REDUCER => DESCRIBES HOW ACTIONS TRANSFORM THE CURRENT STATE INTO THE NEXT STATE


// DISPATCH => WAY WHERE WE ACTUALLY EXECUTE THAT ACTION





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
