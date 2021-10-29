import React from 'react';
import axios from 'axios';
import './App.css';

import { Route, HashRouter as Router, Link } from 'react-router-dom';

import Header from '../Header/Header.jsx';
import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';

function App() {

  return (<>
    <Router>

      <Header />

      <Route path='/' exact>
        <Feeling />
      </Route>

      <Route path="/Understanding">
        <Understanding />
      </Route>

      <Route path="/Supported">
        <Supported />
      </Route>

      <Route path="/Comments">
        <Comments />
      </Route>

    </Router>
  </>
  )
}

export default App;
