import React, { Component } from 'react'
import './App.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

// Components
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

export class App extends Component {
  render () {
    return (
      <div>
        <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
