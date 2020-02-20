import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes/Routes';





class App extends Component{
   
    //Render renderiza os componentes no html
    render(){
        return (
            <Routes/>
        );
    }
}

export default App;
