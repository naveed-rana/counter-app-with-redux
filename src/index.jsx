import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {connect} from 'react-redux';
import {Provider} from 'react-redux';
import './css/default.css';
import  App from './components/app.jsx';
import rootReducer from './reducers/index.js';


const store = createStore(rootReducer);
console.log("state is",store.getState());




ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('content'));
