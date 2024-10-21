import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/nav.css';
import { myContext } from '../context/TimerContext';
const Nav = () => {
    const { isopened, setIsopened } = useContext(myContext);
  return (
    <div className={`nav ${isopened ? 'open' : ''}`}>
        
       <nav className={`side-bar`}>         
         <NavLink to='/' className='nav-item'>
            <span className='indicator'></span>
            <i class="fa-solid fa-hourglass"></i>
            <span>Timer</span>
         </NavLink>
        < NavLink to='/stop-watch' className='nav-item'>
          <span className='indicator'></span>
          <i class="fa-solid fa-stopwatch"></i>
          <span>Stop Watch</span>
        </NavLink>
        <NavLink to='/clock' className='nav-item'>
            <span className='indicator'></span>
            <i class="fa-regular fa-clock"></i>
            <span>World Clock</span>
        </NavLink>
       </nav>
    </div>

  )
}

export default Nav