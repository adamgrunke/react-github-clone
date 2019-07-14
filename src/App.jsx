import React from 'react';
import './App.css';
import Landing from './Components/Landing'
import Index from './Components/Index'
import Show from './Components/Show'
import KanyeTest from './Components/KanyeTest'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class App extends React.Component {


  render () {
    return (
      <Router>
      <nav>
        <Link to='/'>Landing</Link>{' | '}
        <Link to='/issues'>Issues</Link>{' | '}
        <Link to='/issues/:id'>Single Issues</Link>{' | . . . . .  '}
        <Link to='/kanyetest'>kanyetest</Link>
      </nav>

        <Route exact path='/' component={Landing}/>
        <Route exact path='/issues' component={Index}/>
        <Route exact path='/issues/:id' component={Show}/>
        <Route exact path='/kanyetest' component={KanyeTest}/>
        
      </Router>
    )
  }
}

export default App;
