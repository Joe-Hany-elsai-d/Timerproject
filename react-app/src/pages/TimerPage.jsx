import React, { useContext, useEffect, useState } from 'react';
import { data } from '../assets/data';
import Timer from '../components/timer';
import Add from '../components/Add';
import { myContext } from '../context/TimerContext';

const TimerPage = () => {
   const { setIsopened } = useContext(myContext);
    const [timersData, setTimersData] = useState(data);
    const [editing, setEditing] = useState(false);
    const [adding, setAdding] = useState(false);
    useEffect(() => {
       if (timersData.length === 0) {
        setEditing(false);        
       }
    }, [timersData.length]);

    return (
       <div className={`timer-page ${adding ? 'backdrop' : ''}`}>
         <button id='menu-icon' onClick={() => setIsopened(prev => !prev)}>
          <i class="fa-solid fa-bars"></i>
        </button> 
        <div className='timers-sec'>
          {timersData.map((data, ind) => {
             return <Timer dictData={data} updateTimers={setTimersData} isEditing={editing} key={ind} />
          })}          
        </div>
        {timersData.length === 0 && 
          <div className='notfound-text'>
            <i style={{fontSize: '5rem'}} className="fas fa-stopwatch"></i>
            <h2>You don't have any timers.</h2>
            <p>Select "+" below to add a new timer.</p>
          </div> 
        }
         <div className='bottom-btns'>
            <button disabled={timersData.length === 0} onClick={() => setEditing(prev => !prev)} className='edit'>
              {editing ? 
               <i className="fas fa-check"></i> : 
               <i className="fas fa-edit"></i>
              }
            </button>
            <button onClick={() => setAdding(true)} disabled={editing} className='edit'>
              <i className="fas fa-plus"></i>             
            </button>
         </div>
         {adding && <Add updateTimers={setTimersData} setAdding={setAdding}/>}
       </div>
    )
}

export default TimerPage;
