import React from "react";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {withRouter} from 'react-router';




import './App.css';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Bio from "./Pages/Bio";




function App() {
  return (
    <>
       <Router>
      <Switch>
        <React.Fragment>
            <div>
            <NavBar />
              <Route   path="/" component={Home} exact />
              <Route path="/calendario" component={Bio}  />
            </div>
        </React.Fragment>
      </Switch>
    </Router>      
    </>
    
  );
}

export default App;
