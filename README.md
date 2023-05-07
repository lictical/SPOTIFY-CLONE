# SPOTIFY-

I will create the spotify clone using react for fron end and node.js for back end. for this we will use VITE framework with a react template.

## 1. Setting the environment.
### 1.1 SETTING FRONT END REACT
  First open GIT BASH and enter to you projects folder.
  now create a folder for your project with CMD code:
    
    GIT BASH: 
      "
      mkdir REACT-SPOTIFY-CLONE
      "
   
  Proceed to create the vite app with the following BASH COMMAND:
  
    GIT BASH: 
      "
      npm create vite@latest front-end -- --template react
      "
    
  Once it is done enter the following commands:
  
    GIT BASH: 
      "
      cd front-end
      npm install
      "
            
### 1.2 SETTING BACK NODE.JS
  Within the main folder create a folder named server and enter the folder.
  
    CMD: 
      "
      cd server
      "
  Paste the following command and install the required libraries express, nodemon, dotenv:
  
    CMD:
      "
      npm init
      npm install express
      npm i -D nodemon
      npm i dotenv
      "
   Create the .env and .gitignore files 
   In the .gitignore file write down the following:
   
    .gitignore: 
       "
       /node_modules
       .env
       "
   Create the server.js file.
   
   
### Setting the Spotify api access
  Craete a free acount in spotify to do so go to: 
    
    https://developer.spotify.com/dashboard
  Create an app
  
  The app will ask you to give it a name, a description and a redirect URL. if you are in development add:
    
    http://localhost:YOUR-PORT/callback
  
  
