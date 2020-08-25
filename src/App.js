import React from 'react';
import NavigationBar from './components/NavigationBar'
import InterviewSection from './components/InterviewSection'
import Article from './components/Article'

import './App.css';

function App() {
  return (
    <div className="App">
  <NavigationBar/>
  <InterviewSection/>
  <Article/>
    </div>
  );
}

export default App;
