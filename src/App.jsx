import React from 'react';
import './App.css';
import Landing from './Components/Landing'
import Index from './Components/Index'
import Show from './Components/Show'

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
        <Link to='/Index'>Index</Link>{' | '}
        <Link to='/Show'>Show</Link>
      </nav>

        <Route exact path='/' component={Landing}/>
        <Route exact path='/Index' component={Index}/>
        <Route exact path='/Show' component={Show}/>
        
      </Router>
    )
  }
}

export default App;
