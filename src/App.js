import React, { Component } from 'react';
import './App.css';
import BoxSeries from './componets/series/BoxSeries';


class App extends Component{
   
    //Render renderiza os componentes no html
    render(){
        return (
            <div className="App">
            <h1>Cadastro de series</h1>
                <BoxSeries/>
            </div>
        );
    }
}

export default App;
