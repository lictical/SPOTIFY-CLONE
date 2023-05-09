import React, { useEffect, useState } from 'react'
import './display.css'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setToken } from '../../redux/store';
import Card from '../card/Card'

const CLIENT_ID= "22513d60f7cc43268055d72d21c270df";
const CLIENT_SECRET = "f7b82eac339c497bb0bd5a88431435a3";

const Display = () => {
 

  // ============== 1. REDUX TOOLKITS USE SELECTORS  ==================================
  const dispatch = useDispatch();
  const albums = useSelector((state)=> state.albums);         // Gets the album data saved in the album slice

  // ============== 2. HOOKS ==========================================================
  const [accessToken, setAccessToken ]= useState("");
 
  // ============== 3. FUNCTIONS ======================================================
    // ============== 3.1 FUNCTIONS FOR SETTING THE ACCESS TOKEN THE THE HOOK AND THE REDUX TOOLKIT SLICE
  const handleGetAccessToken = (data)=>{
    setAccessToken(data.access_token);                        // Sets the hook in bullet point 2
    console.log("getting access token ...");
    console.log(data.access_token);
    dispatch(setToken(data.access_token));                    // Calls the action dispatch and action setToken, sends data to the store.js
    localStorage.setItem('access_token', data.access_token);  // Saves to local storage
  }

  // ============== 3.2 USES THE TOKEN AND GETS TEH DATA WITH AFETCH FUNCTION FROM THE SPOTIFY API TO GET THEA ACCESS TOKEN
    const fetchData = ()=>{
    
      console.log("got access token ");
    // ============ 3.2.1 Variable that fills parameters required by Spotify API to be added to the fetch request
      var authParameters = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials&client_id='+CLIENT_ID+'&client_secret='+CLIENT_SECRET
      }
    // ============ 3.2.2 Fetch request to the spotify API to get the access token 
      fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(result => result.json())        // Turns result into Json file
      .then(handleGetAccessToken)           // Go to bullet point 3.1
      .catch(error=>console.error(error));  // Catches errors
    };
  
 
    // ============== 3.3 FUNCTIONS TO BE CALLED WHEN THE PAGE IS MOUNTED 
  useEffect(()=>{
    // const token = localStorage.getItem('access_token');
    // if(token){
    //   setAccessToken(token);
    //   dispatch(setToken(token));
    // } else {
    //   fetchData();
    // }
    
    fetchData();

  },[] );


// ============== 4. DEBUGGING FUNCTIONS =================================================
  const cardHandler = ()=> {
    albums.map((album, index)=>{
      console.log(index);
      console.log(album.images[0].url );
      console.log(album.name);

    });
  };

// ============== 5. HTML CODE ===========================================================
  return (
    <section id='display'>
      
      {albums.length > 0 ? (
      albums.map((album, index)=>{return (
        <Card id={index} title="Album" description={album.name} url={album.images[0].url}/>);})
      ):(<p>SEARCH SOMETHING</p>)}
      
      
    </section>
  )
}

export default Display