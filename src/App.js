import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import LaunchApp from './Components/LaunchApp/LaunchApp';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/launch-app" component={LaunchApp} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
