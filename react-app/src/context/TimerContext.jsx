import React, { createContext, useState, useRef } from 'react'
import { cities } from '../assets/data';

export const myContext = createContext();
const TimerContext = ({ children }) => {
  const [isopened, setIsopened] = useState(false);
  const [time, setTime] = useState(0);
  const [isrunning, setIsrunning] = useState(false);
  const [clockdata, setClockdata] =  useState([]);
  const intervalId = useRef(null);
   
  const startWatch = () => {
    if (!isrunning) {
      setIsrunning(true);
      intervalId.current = setInterval(() => setTime(prev => prev + 10), 10);
    } else {
      setIsrunning(false);
      clearInterval(intervalId.current);
    }
  };

  const reset = () => {
    clearInterval(intervalId.current);
    setIsrunning(false);
    setTime(0);
  };

  const values = {
        isopened,
        setIsopened,
        time,
        setTime,
        startWatch,
        reset,
        isrunning,
        clockdata,
        setClockdata,
        cities
  }  
  return (
    <myContext.Provider value={values}>
       { children }
    </myContext.Provider>
  )
}

export default TimerContext;