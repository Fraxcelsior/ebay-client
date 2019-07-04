import {combineReducers} from 'redux'
import userReducer from './userReducer'
import ads from './ads'

export default combineReducers({
  userReducer,
  ads
})