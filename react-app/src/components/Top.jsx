import React, { useContext } from 'react'
import { myContext } from '../context/TimerContext';

const Top = () => {
   const { setIsopened } = useContext(myContext);
  return (     
      <button id='menu-icon' onClick={() => setIsopened(prev => !prev)}>
         <i class="fa-solid fa-bars"></i>
      </button>          
  )
}

export default Top