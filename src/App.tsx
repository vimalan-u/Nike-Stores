import React from 'react';
import logo from './logo.svg';
import './App.css';

import { GoogleOAuthProvider } from '@react-oauth/google';
import Google from './google';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <GoogleOAuthProvider clientId="554194615704-q8bu5s6d7s0arg54c7kd97vhuomff586.apps.googleusercontent.com">
          <Google />
        </GoogleOAuthProvider>
      </header>
    </div>
  );
}

export default App;
