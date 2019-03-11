import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';


// Create an Object and put all my Reducers (Combine them)
// when i use anything from auth reducer in my component use: this.props.auth
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer
});