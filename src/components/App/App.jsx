import React from 'react';
//need ONREADY with useEffect
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

//Set up routes so it's a SPA 
import { Route, HashRouter as Router, Link } from 'react-router-dom';

//import each component into APP
import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import FeedbackPage from '../FeedbackPage/FeedbackPage';

import { useDispatch } from 'react-redux';

function App() {

  //local State 
  const [feedbackList, setFeedbackList] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchFeedback()
  }, [])

  //GET 
  const fetchFeedback = () => {
    axios.get('/feedback')
      .then(response => {
        console.log(`this is the data`, response.data);
        setFeedbackList(response.data)
      })
      .catch(error => {
        console.log(`Error getting data`, error);
        alert(`could not get data!---`)
      })
  }


  return (<>
    <Router>

      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
      </div>

      <Route path='/feeling'>
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

      <Route path="/Review">
        <Review />
      </Route>

      <Route path="/FeedbackPage">
        <FeedbackPage />
      </Route>


    </Router>
  </>
  )
}

export default App;
