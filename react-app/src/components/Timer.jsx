import React, { useState, useRef, useEffect } from 'react';
import '../styles/timer.css';

const Timer = ({ dictData, updateTimers, isEditing }) => {
  
  const [hours, setHours] = useState(dictData.hours);
  const [minutes, setMinutes] = useState(dictData.minutes);
  const [seconds, setSeconds] = useState(dictData.seconds);
  const [timerStart, setTimerStart] = useState(false);
  const [reseted, setReseted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const itemRef = useRef(null);
  const intervalId = useRef(null);   
    
  const countdown = () => {
    setTimerStart(true);
    setReseted(false);
    intervalId.current = setInterval(handleCount, 1000);
  };

  const handlePause = () => {
    setTimerStart(false);
    clearInterval(intervalId.current);
  };

  const handleCount = () => {
    setSeconds((prevSeconds) => {
      if (prevSeconds > 0) {
        return prevSeconds - 1;
      } else {
        if (minutes > 0) {
          setMinutes((prev) => prev - 1);
          return 59;
        } else if (hours > 0) {
          setHours((prev) => prev - 1);
          setMinutes(59);
          return 59;
        } else {
          setTimerStart(false);
          clearInterval(intervalId.current);
        }
      }
    });
  };

  const handleReset = () => {
    clearInterval(intervalId.current);
    setReseted(true);
    setTimerStart(false);
    setHours(dictData.hours);
    setMinutes(dictData.minutes);
    setSeconds(dictData.seconds);
  };

  const handleDelete = () => {
    updateTimers((prev) => prev.filter((item) => item.id !== dictData.id));
  };
  const toggleFullscreen = () => {
     if (!isFullscreen) {
       setIsFullscreen(true);
       if (itemRef.current) {
         itemRef.current.requestFullscreen();
       }      
     }else {
       setIsFullscreen(false);
       document.exitFullscreen();
     }
  } 
  useEffect(() => {
    const handleChangeScreen = () => {
        setIsFullscreen(!!document.fullscreenElement);
    } 
    document.addEventListener('fullscreenchange', handleChangeScreen);
    return () => removeEventListener('fullscreenchange', handleChangeScreen); 
  }, [])
  return (
    <div className={`timer-item ${isFullscreen ? 'fullscreen' : ''}`} ref={itemRef} >
      <div className="timer-label">
        <p className={`span ${isEditing ? 'disabled' : ''}`}>
          {dictData.label}
        </p>
        {isEditing ? (
          <span onClick={handleDelete} className="fas fa-trash del"></span>
        ) : (
          <span onClick={toggleFullscreen} className="fas fa-expand fullscreen"></span>
        )}
      </div>
      <div className={`time ${isEditing ? 'disabled' : ''}`}>
        <h1>{hours < 10 ? '0' + hours : hours}</h1>
        <h1>:</h1>
        <h1>{minutes < 10 ? '0' + minutes : minutes}</h1>
        <h1>:</h1>
        <h1>{seconds < 10 ? '0' + seconds : seconds}</h1>
      </div>
      <div className='timer-handler'>
        <button disabled={isEditing} className={`button timer-start`} onClick={timerStart ? handlePause : countdown}>
          {timerStart ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>}
        </button>
        <button className={`button reset-btn`} onClick={handleReset} disabled={reseted || isEditing}>
          <i className="fas fa-undo-alt"></i>
        </button>
      </div>
    </div>
  );
  
};

export default Timer;