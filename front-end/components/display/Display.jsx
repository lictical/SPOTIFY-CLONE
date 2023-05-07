import React, { useEffect, useState } from 'react'
import './display.css'
import Card from '../card/Card'

const CLIENT_ID= "22513d60f7cc43268055d72d21c270df";
const CLIENT_SECRET = "f7b82eac339c497bb0bd5a88431435a3";

const Display = () => {
  const [accessToken, setAccessToken ]= useState("");
  useEffect(()=>{

    //API ACCESS TOKEN
    var authParameters = {
      method: 'POST',
      headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id='+CLIENT_ID+'&client_secret='+CLIENT_SECRET
    }
    fetch('https://accounts.spotify.com/api/token', authParameters)
    .then(result => result.json())
    .then(data=> setAccessToken(data.access_token))
    .catch(error=>console.error(error))
  },[]);

  return (
    <section id='display'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      
    </section>
  )
}

export default Display