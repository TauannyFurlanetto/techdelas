import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Podcasts from './Podcasts';
import Podcast from './components/Podcast.js';
ReactDOM.render(
  <React.StrictMode>
    <Podcasts />
  </React.StrictMode>,
  document.getElementById('root')
);

