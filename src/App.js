import React from 'react';
import NavigationBar from './components/NavigationBar'
import InterviewSection from './components/InterviewSection'
import Article from './components/Article'
import WorldGuide from './components/WorldGuide'
import LastWeekInterview from './components/LastWeekInterview'

import './App.css';

function App() {
  return (
    <div className="App">
  <NavigationBar/>
  <InterviewSection/>
  <Article/>
  <WorldGuide/>
  <LastWeekInterview/>
    </div>
  );
}

export default App;
