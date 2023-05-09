// store.js
/*
// This code creates a Redux store with a 'token' slice that holds the access token value. 
The 'setToken' action is used to update the token state. The 'Store' constant holds the configured store 
and is exported along with the 'setToken' action.
*/
import { configureStore, createSlice } from '@reduxjs/toolkit';

// =================== 1. REDUX SLICES ==============================
const tokenSlice = createSlice({                // Saves the access token given by the spotify API
    name: 'token',
    initialState: null,
    reducers: {
        setToken(state, action) {
            return action.payload;
        },
    },
});

const albumSlice = createSlice({                // Saves the Spotify API data from albumes given
    name: 'albums',
    initialState: {},
    reducers: {
        setAlbumsSlice(state, action) {
            return action.payload;
        },
    },
});

// ==================== 2. REDUX REDUCERS ================================
const Store = configureStore({
    reducer: {
        token: tokenSlice.reducer,
        albums: albumSlice.reducer,

    }
});

// ==================== 3. EXPORT ACTIONS ================================
export const {setAlbumsSlice} = albumSlice.actions;
export const {setToken} = tokenSlice.actions;

export default Store;