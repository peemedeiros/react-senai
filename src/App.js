import React, { Component } from 'react';
import './App.css';
import BoxSeries from './componets/series/BoxSeries';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
   
    //Render renderiza os componentes no html
    render(){
        return (
            <div className="App">
                <BoxSeries/>
            </div>
        );
    }
}

export default App;
