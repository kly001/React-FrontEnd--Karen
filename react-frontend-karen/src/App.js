import React from 'react';
import ReactDOM from "react-dom";

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodReview:[]
    }
  }
  render() {

  
  return (
    <div className="App">
      <nav>
          <h1 className="header">You Ready To Eat?</h1>
          <div className="nav-links">
            {/* <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/item-list">Shop</NavLink> */}
          </div>
      </nav>
      
      
      <div className="input-sections">
      <div className="login-section">
      <h2>LOGIN</h2>
      <input
          type="text"
          name="first-name"
          placeholder="First Name"
      />
      <input
          type="text"
          name="last-name"
          placeholder="Last Name"
      />
       <button>Submit to Login</button>
      <h5>Not a member? Click <button>Here</button>to signup</h5>
     
      </div>

      {/* <div className="signup-section">
      <h2>SIGNUP</h2>
      <input
          type="text"
          name="first-name"
          placeholder="First Name"
      />
      <input
          type="text"
          name="last-name"
          placeholder="Last Name"
      />
      <input
          type="text"
          name="email"
          placeholder="Email"
      />
      <input
          type="text"
          name="password"
          placeholder="Password"
      />

      <button>Submit to Signup</button>
      </div> */}
      </div>
  
    </div>
   
  );
  }
}

export default App;
