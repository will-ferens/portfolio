import React, { Component } from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect 
} from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { 
  TransitionGroup,
  CSSTransition
} from 'react-transition-group'

import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'

class App extends Component {
  render() {
    return (
    <Router>
      <Route render={({ location }) =>  (
        <div className="body">
        <div className="header">

        <ul className="nav">
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/about">About</Link></li>
          <li className="nav-item"><Link to="/projects">Projects</Link></li>
        </ul>
        <div>
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={1000}
              classNames='fade'
            >
              <Switch location={location}>
                <Route 
                  exact 
                  path="/" 
                  component={Hero} />
                <Route 
                  exact 
                  path="/about" 
                  component={About} />
                  <Route 
                  exact 
                  path="/projects" 
                  component={Projects} />
                <Route render={() => <div className="page"><h1>Not Found</h1></div>} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
      </div>
      )} />
    </Router>
    )
  }
}

export default App
