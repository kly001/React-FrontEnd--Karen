import React from "react";
import {BrowserRouter as Router, Route, Link, Redirect}  from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return(
    <Router>
      <div className="App">
        <div className="App-header ">
          <h1>You Ready To Eat?</h1>
        </div>
        <Login/>
      </div>
      <p>Not a member? Signup <button>here</button></p>
    </Router>
  )
}
export default App