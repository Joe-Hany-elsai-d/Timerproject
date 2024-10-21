import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../styles/add.css';

const Add = ({ updateTimers, setAdding }) => {
    const [counter, setCounter] = useState(1);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [label, setLabel] = useState('Timer ' + counter);
    const [active, setActive] = useState('hours');
  
    const handleAdd = () => {  
        if (label.trim() === '') {
          setLabel(`Timer (${counter})`)
        }    
        const dictFormat = { id: uuidv4(), label: label, minutes: minutes, hours: hours, seconds: seconds };
        updateTimers(prev => [...prev, dictFormat]);
        setAdding(false);
        setCounter(prev => prev + 1); 
    }

    const handleArrowDown = (setValue) => {
        setValue(prev => (prev <= 0 ? 59 : prev - 1));
    }

    const handleArrow = (setValue) => {
        setValue(prev => (prev >= 59 ? 0 : prev + 1));       
    }

    const handleHoursUp = () => {
        setHours(prev => (prev >= 99 ? 0 : prev + 1));
    }

    const handleHoursDown = () => {
        setHours(prev => (prev <= 0 ? 0 : prev - 1));
    }

    return (
        <div className='add-com'>
            <h2>Add new timer</h2>
            <div className='time-func'>
              <div className='up-arr'>
                    <button onClick={handleHoursUp} >
                        <i className="fas fa-arrow-up"></i>
                    </button>
                    <button onClick={() => handleArrow(setMinutes)} >
                        <i className="fas fa-arrow-up"></i>
                    </button>
                    <button onClick={() => handleArrow(setSeconds)} >
                        <i className="fas fa-arrow-up"></i>
                    </button>
              </div>
              <div className='add-time'>
                <h1  className={`hovered ${active === 'hours' ? 'active' : ''}`}>
                    {hours < 10 ? '0' + hours : hours}
                </h1>
                <h1>:</h1>
                <h1 className={`hovered ${active === 'minutes' ? 'active' : ''}`}>
                    {minutes < 10 ? '0' + minutes : minutes}
                </h1>
                <h1>:</h1>
                <h1  className={`hovered ${active === 'seconds' ? 'active' : ''}`}>
                  {seconds < 10 ? '0' + seconds : seconds}
                </h1>
              </div>
              <div className="up-arr">
                <button onClick={handleHoursDown}>
                  <i className="fas fa-arrow-down"></i>
                </button>
                <button onClick={() => handleArrowDown(setMinutes)} >
                  <i className="fas fa-arrow-down"></i>
                </button>
                <button onClick={() => handleArrowDown(setSeconds)} >
                        <i className="fas fa-arrow-down"></i>
                </button>
              </div>   
                 
            </div>   
             <div className="input-field">
                    <i id='inp-icon' className="fas fa-id-badge"></i>
                    <div id='form' tabIndex="0">
                        <input onChange={(e) => setLabel(e.target.value)} type="text" value={label}/>
                        <button onClick={() => setLabel('')} id="remove-btn">
                            <i className="fas fa-times"></i>
                        </button>
                    </div>   
              </div>
              <div className='check-out'>
                  <button onClick={handleAdd} className='add-btn save-btn'>
                      <i className="fas fa-save"></i>
                      <p>Save</p>
                  </button>
                  <button className='add-btn cancel-btn' onClick={() => setAdding(false)}>
                      <i className="fas fa-times"></i>
                      <p>Cancel</p>
                  </button>
              </div>
        </div>
       
    );
}

export default Add;
