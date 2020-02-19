import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './componets/login/Login';
import * as serviceWorker from './serviceWorker';

const isSingedIn = true; 

const Index = () => {
    if(isSingedIn)
        return <App />
    else 
        return <Login />
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
