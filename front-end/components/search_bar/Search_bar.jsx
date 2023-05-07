import React from 'react'
import './search_bar.css'
import {useState,useEffect } from 'react'
const Search_bar = () => {

  const [ searchInput, setSearchInput]= useState("");
  const handleKeyDown = (event)=>{
    if(event.key === "Enter") {
        console.log("down");
    }
  
  };
  const handleChange = (event) => {
    console.log("changing..")
    setSearchInput(event.target.value)
    };

  return (
    <section id='search_bar'>
        <form action="">
            <input type="text" placeholder='search' onKeyDown={handleKeyDown} onChange={handleChange}/>
            <button onClick={handleChange}>search</button> 
        </form>

    </section>
  )
}

export default Search_bar