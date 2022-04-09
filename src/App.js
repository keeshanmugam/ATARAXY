import React from "react";
import "./App.css";
import Nav from "./components/nav/nav";
import Header from "./components/header/header";
import About from "./components/About/About";
import Login from "./components/login/login";
import Music from "./components/Music/Music";
import Exercise from "./components/exercise/exercise";
import Aromatherapy from "./components/aromatherapy/aroma";
import Counselling from "./components/counselling/counselling";
import Sign_up from "./components/sign_up/sign_up";
import Log from "./components/log/log";
import { BrowserRouter as Router,Route } from "react-router-dom";

function App() {
  return (
    <Router>
          <div className="App">
              <Nav />
                  <Route path='/header' component={Header} exact/>
                  <Route path='/About' component={About}/> 
                  <Route path='/login' component={Login} />
                  <Route path='/Music' component={Music}/>
                  <Route path='/aromatherapy' component={Aromatherapy}/>
                  <Route path='/exercise' component={Exercise}/>
                  <Route path='/counselling' component={Counselling}/>
                  <Route path='/sign_up'component={Sign_up}/>
                  <Route path='/log' component={Log}/>
                  
          </div>
    </Router>
    
  );
}
export default App;