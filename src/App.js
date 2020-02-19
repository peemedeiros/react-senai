import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import BoxSeries from './componets/series/BoxSeries';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './componets/login/Login.css';
import Navbar from './componets/Navbar'
import Home from './componets/home/Home';
import Login from './componets/login/Login';
import Autores from './componets/autores/Autores'


const NotFound = () => {
    return(
        <div>
            <h1>404 page not found</h1>
        </div>
    )
}

class App extends Component{
   
    //Render renderiza os componentes no html
    render(){
        return (
            <Router>
                <div className="App">
                    <Navbar />

                    <Switch>

                        <Route path='/series' component={BoxSeries} />
                        <Route path='/autores' component={Autores} />
                        <Route path='/login' component={Login} />
                        <Route exact path='/' component={Home} />
                        <Route component={NotFound} />

                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
