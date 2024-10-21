import React, { useContext, useEffect, useState } from 'react'
import '../styles/clockadd.css';
import { myContext } from '../context/TimerContext';
const Clockadd = ({ updateadding}) => {
    const { cities, setClockdata } = useContext(myContext);
    const [search, setSearch] = useState('');
    const [filters, setFilters] = useState([]);
    const [displayres, setDisplayres] = useState(false);
    const format = (text) => {
       return text.toLowerCase().trim();
    }
    const handleChange = (e) => {
        if (!e.target.value > 0) {
           setDisplayres(false);
        }else {         
           setDisplayres(true);
        } 
        setSearch(e.target.value);     
    }
    const updateSearch = (query) => {
       const result = cities.find(city => city.displayName === query);
       setSearch(result.displayName);
       setDisplayres(false);
    } 
    const handleAdd = (search) => {        
        const city = cities.find(city => city.displayName === search);
        if (city){
          setClockdata(prev => [...prev, city]);
        }       
        updateadding(false);
    }
    useEffect(() => {
       setFilters(cities.filter(city => format(city.displayName).includes(format(search))));         
    }, [search])

   return (
    <div className='add-com'>
        <h1>Add new location</h1>
        <input autoComplete='off' value={search} onChange={handleChange} id='search-time' type="search" placeholder='Enter a location'/>
        {displayres && <div className='search-results'>
          {filters.map((item, ind) => {
            return <div key={ind} onClick={() => updateSearch(item.displayName)}><span>{item.displayName}</span></div>
          })}  
         </div>}
      
        <div className='check-out'>
            <button onClick={() => handleAdd(search)} className='add-btn save-btn'>
                <i class="fa-solid fa-xmark"></i>
                <p>Add</p>
            </button>
            <button onClick={() => updateadding(false)} className='add-btn cancel-btn'>
                <p>Close</p>
                <i class="fa-solid fa-plus"></i>
            </button>
         </div>
    </div>
  )
}

export default Clockadd