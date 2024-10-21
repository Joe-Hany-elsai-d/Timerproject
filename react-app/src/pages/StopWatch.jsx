import React, { useContext, useRef, useState } from 'react';
import '../styles/stopwatch.css';
import { myContext } from '../context/TimerContext';

const StopWatch = () => {
  const { startWatch, time, reset, isrunning } = useContext(myContext);
  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);

  return (
    <div id='watch-page'>
      <div className='stop-watch'>
        <div className='watch-cont'>
          <div className='sw-time'>
            <h1>{hours < 10 ? `0${hours}` : hours}</h1>
            <span>hr</span>
          </div>
          <span className='separator'>:</span>
          <div className='sw-time'>
            <h1>{minutes < 10 ? `0${minutes}` : minutes}</h1>
            <span>min</span>
          </div>
          <span className='separator'>:</span>
          <div className='sw-time'>
            <h1>{seconds < 10 ? `0${seconds}` : seconds}</h1>
            <span>sec</span>
          </div>
          <span className='separator'>.</span>
          <span className='milliseconds'>
            {milliseconds < 10 ? `0${milliseconds}` : milliseconds}
          </span>
        </div>
        <div className='sw-bottom-btn'>
          <button className='sw-btn sw-run' onClick={startWatch}>
            {isrunning ? <i className="fa-solid fa-pause"></i> : <i className="fa-solid fa-play"></i>}
          </button>
          <button disabled={time === 0} className='sw-btn sw-reset' onClick={reset}>
            <i className="fas fa-undo-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
