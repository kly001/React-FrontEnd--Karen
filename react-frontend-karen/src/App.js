import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      
      <div className="title">
      <h1>Foodie Fun Project</h1>
      </div>
      
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
      </div>

      <div className="signup-section">
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
      </div>
      </div>
  
    </div>
   
  );
}

export default App;
