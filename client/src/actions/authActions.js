import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken  from '../utils/setAuthToken';

import { GET_ERRORS, SET_CURRENT_USER } from './types';


// Register User

// NOTE: This is an Action Creator that returns action 
// Payload: data send along with type
// history.push for redirection

export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post('/api/users/register', userData)
    .then( res => history.push('/login'))
    .catch( err => 
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
};

// Login User - Get User Token
export const loginUser = (userData) => (dispatch) => {
  axios.post('/api/users/login', userData)
    .then(res => {
      // Save to localStorage
      const { token } = res.data;
      // Set token to localstorage
      localStorage.setItem('jwtToken', token);
      //  Set token to Auth header
      setAuthToken(token); 
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => 
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}

// Log user out
export const logoutUser = () => (dispatch) => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for furture request
  setAuthToken(false);
  // Set current user to {} wich will set isAuthenticated to false
  dispatch(setCurrentUser({}));
}


