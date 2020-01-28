import React, { Component } from 'react'
import './App.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

// Components
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'

export class App extends Component {
  render () {
    return (
      <div>
        <Navbar/>
        <Home/>
      </div>
    );
  }
}
export default App;
