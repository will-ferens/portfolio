import React, { Component } from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { 
  TransitionGroup,
  CSSTransition
} from 'react-transition-group'

import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'

import {ICONS} from './constants'

class App extends Component {
  render() {
    return (
    <Router className="wrapper">
      <Route render={({ location }) =>  (
      <div>
        <div className="header">
          <div className="navbar">
            <ul className="nav">
              <li className="nav-item"><Link to="/about">About</Link></li>
              <li className="nav-item"><Link to="/projects">Projects</Link></li>
            </ul>
            <ul className="links" >
              <li className="nav-item">
                <svg width="17" height="17" viewBox="0 0 1024 1024" >
                  <path d={ICONS.TWITTER}></path>
                  
                </svg>
              </li>
              <li className="nav-item">
                <svg width="17" height="17" viewBox="0 0 1024 1024">
                  <path d={ICONS.GITHUB}></path>
                </svg>
              </li>
              <li className="nav-item">
                <svg width="22" height="22" viewBox="0 0 1024 1024">
                  <path d={ICONS.LINKEDIN}></path>
                </svg>
              </li>
              <li className="nav-item">
                <svg width="17" height="17" viewBox="0 0 1024 1024">
                  <path d={ICONS.EMAIL}></path>
                </svg>
              </li>
            </ul>

          </div>
          
        </div>
        <div className="body">
          <Route 
            exact 
            path="/" 
            component={Hero} />
          <TransitionGroup className="page-wrapper">
            <CSSTransition
              key={location.key}
              timeout={1000}
              classNames='fade'
            >
              <Switch location={location}>
                <Route 
                  exact 
                  path="/about" 
                  component={About} />
                  <Route 
                  exact 
                  path="/projects" 
                  component={Projects} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
        <div className="footer">
        </div>
      </div>
      )} />
    </Router>
    )
  }
}

export default App
