import React from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import Results from './pages/Results';
import {BrowserRouter, Route} from 'react-router-dom';
import Hotel from './pages/Hotel';
import Success from './pages/Success';
import Error from './pages/Error';

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={() => (
            <div className="main">
              <Homepage />
            </div>
          )}/>
          <Route exact={true} path='/results' render={() => (
            <div className="main">
              <Results />
            </div>
          )}/>
          <Route exact={true} path='/hotel' render={() => (
            <div className="main">
              <Hotel />
            </div>
          )}/>
          <Route exact={true} path='/success' render={() => (
            <div className="main">
              <Success />
            </div>
          )}/>
          <Route exact={true} path='/error' render={() => (
            <div className="main">
              <Error />
            </div>
          )}/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
