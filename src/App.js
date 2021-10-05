import React from "react";


import './App.css';
import NavBar from './Components/NavBar';

import Home from './Pages/Home';
import Bio from "./Pages/Bio";



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
   


      <Router>
      <Switch>
        <React.Fragment>
            <div className="bg-grey">
            <NavBar />
              <Route   path="/" component={Home} exact />
              {/* <Route path="/alumni" component={Alumni}  /> */}
              <Route path="/bio" component={Bio}  />
            </div>
        </React.Fragment>
      </Switch>
    </Router>
    </>
    
  );
}

export default App;
