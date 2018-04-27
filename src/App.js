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
import Resume from './components/Resume'

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
              <li className="nav-item"><Link to="/about">ABOUT</Link></li>
              <li className="nav-item"><Link to="/projects">PROJECTS</Link></li>
              <li className="nav-item"><Link to="/resume">RESUME</Link></li>
            </ul>
            <ul className="links" >
              <li className="nav-item">
                <a href="https://twitter.com/will_ferens">
                  <svg width="17" height="17" viewBox="0 0 1024 1024" >
                    <path d={ICONS.TWITTER}></path>
                  </svg>
                </a>
              </li>
              <li className="nav-item">
                <a href="https://github.com/will-ferens"><svg width="17" height="17" viewBox="0 0 1024 1024">
                  <path d={ICONS.GITHUB}></path>
                </svg></a>
              </li>
              <li className="nav-item">
                <a href="https://www.linkedin.com/in/will-ferens/">
                  <svg width="22" height="22" viewBox="0 0 1024 1024">
                    <path d={ICONS.LINKEDIN}></path>
                  </svg>
                </a>
              </li>
              <li className="nav-item">
                <a href="mailto:will.ferens@gmail.com">
                  <svg width="17" height="17" viewBox="0 0 1024 1024">
                    <path d={ICONS.EMAIL}></path>
                  </svg>
                </a>
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
                  <Route 
                  exact 
                  path="/resume" 
                  component={Resume} />
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
