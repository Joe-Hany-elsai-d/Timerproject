import React from 'react';
import TimerPage from './pages/TimerPage';
import Nav from './components/Nav';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Clock from './pages/Clock';
import StopWatch from './pages/StopWatch';
import Top from './components/Top';
const App = () => {
  return (
    <div className='app'>
      <Top />     
      <Nav />
      <Routes>
        <Route path='/' element={<TimerPage />} /> 
        <Route path='/clock' element={<Clock />} />
        <Route path='/stop-watch' element={<StopWatch />} />
      </Routes>
          
    </div>
  )
  
}

export default App