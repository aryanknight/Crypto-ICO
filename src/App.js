import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import LaunchApp from './Components/LaunchApp/LaunchApp';
import Launch1 from './Components/LaunchApp/Pages/Launch-1';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/launch-app" component={LaunchApp} />
          <Route exact path="/launch-app/1" component={Launch1} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
