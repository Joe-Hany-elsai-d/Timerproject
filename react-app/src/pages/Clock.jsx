import React, { useContext, useEffect, useState } from 'react';
import { dateoptions, getData, getTime, timeoptions } from '../assets/data';
import { myContext } from '../context/TimerContext';
import Clockadd from '../components/Clockadd';
import '../styles/clock.css';

const Clock = () => {
    const { clockdata, setClockdata } = useContext(myContext);
    const [localetime, setLocaltime] = useState('');
    const [localedate, setLocaldate] = useState('');
    const [isediting, setIsediting] = useState(false);
    const [isadding, setIsadding] = useState(false);

    const updateTime = () => {
        const date = new Date();
        setLocaltime(date.toLocaleTimeString(undefined, timeoptions));
        setLocaldate(date.toLocaleDateString(undefined, dateoptions));
    };

    const handleDelete = (name) => {
       setClockdata(prev => prev.filter(item => item.displayName !== name));
    };

    useEffect(() => {
        updateTime();
        const intervalId = setInterval(updateTime, 60000);
        return () => clearInterval(intervalId);
    }, []);
    
    return (
        <div className='timer-page'>
            <div className='clock-sec'>
                <div className='clock-item'>
                    <h2>{localetime}</h2>
                    <div>
                        <h3>Locale time</h3>
                        <span>{localedate}</span>
                    </div>
                </div>
                {clockdata.map((data) => {
                    const { cityTime, hours } = getTime(data.timeZone);
                    return (
                        <div className='clock-item' key={data.displayName}>                            
                            <div className='clock-time'>
                                {isediting ? (
                                    <span onClick={() => handleDelete(data.displayName)} className="fas fa-trash del"></span>
                                ) : (
                                    <div>
                                        {/* Conditional rendering for icons based on the hour */}
                                        {hours >= 6 && hours < 12 && <i className="fas fa-sun" title="Morning"></i>}
                                        {hours >= 12 && hours < 18 && <i className="fas fa-cloud-sun" title="Afternoon"></i>}
                                        {hours >= 18 && hours < 21 && <i className="fas fa-cloud-moon" title="Evening"></i>}
                                        {(hours >= 21 || hours < 6) && <i className="fas fa-moon" title="Night"></i>}
                                    </div>
                                )}
                                <h2>{cityTime}</h2>
                            </div>
                            <div className='clock-date'>
                                <h3>{data.displayName}</h3>
                                <span>{getData(data.timeZone)}</span>                               
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className='bottom-btns'>
                <button 
                    disabled={clockdata.length === 0} 
                    onClick={() => setIsediting(prev => !prev)} 
                    className='edit'>
                    {isediting ? <i className="fas fa-check"></i> : <i className="fas fa-edit"></i>}
                </button>
                <button 
                    onClick={() => setIsadding(true)} 
                    disabled={isediting} 
                    className='edit'>
                    <i className="fas fa-plus"></i>
                </button>
            </div>
            {isadding && <Clockadd updateadding={setIsadding} />}
        </div>
    );
};

export default Clock;
