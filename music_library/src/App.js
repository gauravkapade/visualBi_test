import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import MusicPlayer from './Components/MusicPlayer';
import Footer from './Components/Footer';
import MusicContainer from './containers/MusicContainer';



function App() {
  return (
    <div className='mainContainer' >
      <header className='App-header'>
        <h1 id="mainTitle">GK Music List</h1>
      <hr/>
      </header>
      <div className='rowForm'>
        <div className='left' id='playerDiv'><MusicPlayer /></div>
        <div className='left' id='musiclistDiv'><MusicContainer /></div>
      </div>
      <div className='footer'><Footer/></div>

  </div>
)
}

export default App;
