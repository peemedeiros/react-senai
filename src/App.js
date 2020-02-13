import React, { Component } from 'react';
import './App.css';
import BoxSeries from './componets/series/BoxSeries';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './componets/Navbar'

class App extends Component{
   
    //Render renderiza os componentes no html
    render(){
        return (
            <div className="App">
                <Navbar />
                <BoxSeries/>
            </div>
        );
    }
}

export default App;
