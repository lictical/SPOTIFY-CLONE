import React from 'react'
import './search_bar.css'
import {useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setAlbumsSlice } from '../../redux/store'

const Search_bar = () => {
  // ============== 1. REDUX TOOLKITS USE SELECTORS  ==================================
  const accessToken = useSelector((state)=> state.token); // Get the token Token given by spotify from Display.jsx file
  var albumSlice = useSelector((state)=> state.albums);   // Get the album Album dadta given by Spotify from this file.
  const dispatch = useDispatch();                         // Creates a function to send data the the store.js file slices
 
  
  // ============== 2. HOOKS ==========================================================
  const [ searchInput, setSearchInput]= useState("");     // Create a hook to save whats written in the search bar
  const [albums, setAlbums] = useState([]);               // Create ahook to save the data obtained for the albums from Sotify api


  // ============== 3. FUNCTIONS ======================================================
  //  ============== 3.1 ENTER FUNCTION ===============================================
  const handleKeyDown = (event)=>{                       
    if(event.key === "Enter") {
        search();         
    }
  };

  //  ============== 3.2 TYPING FUNCTION ===============================================
  const handleChange = (event) => {
    console.log("changing..")
    setSearchInput(event.target.value)
    };

  //  ============== 3.3 SEARCH FUNCTION= ===============================================
  async function search() {             // Its an async function since the fetch function requires an await
    console.log("Searching for "+searchInput);

  // ============= 3.3.1 Variable to be given in the fetch required with the necessary methods type and headers by Spotify API
    var searchParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+accessToken
      }
    }
    
  // ============= 3.3.2 Variable that obtains the artist ID from the respective artist using the value from the search input
    var artistID = await fetch('https://api.spotify.com/v1/search?q='+searchInput+ '&type=artist', searchParameters)
    .then(response => response.json())
    .then(data => {return data.artists.items[0].id})
    console.log('Artist id is: '+artistID);

  // ============== 3.3.3 Variable that uses the previous artist ID to get the albums from the respective artist
    var albumsData = await fetch('https://api.spotify.com/v1/artists/'+artistID+'/albums'+'?include_groups=album&market=US&limit=50', searchParameters)
    .then(response => response.json())
    .then(data =>{
      console.log(data.items);
      setAlbums(data.items);
      dispatch(setAlbumsSlice(data.items));
      
    });
  }
  
//  ============== 3.4 FORM SUBMIT FUNCTION TO STOP DEFAULT BEHAVIOR FROM RELOADING PAGE EVERYTIME ITS SUBMITTED
  function handleSubmit(event) {
    event.preventDefault();
  }

// ============== 4. DEBUGGING FUNCTIONS =================================================
  const handleAlbums =()=>{

    // console.log(albums[0].images[0].url);
    console.log("Loading albums..")
    console.log(albumSlice);
    console.log("Success.")
  }

// ============== 5. HTML CODE ===========================================================
  return (
    <section id='search_bar'>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='search' onKeyDown={handleKeyDown} onChange={handleChange}/>
            <button onClick={search}>search</button> 
            <button onClick={handleAlbums}>Log Albums</button>
        </form>
        

    </section>
  )
}

export default Search_bar