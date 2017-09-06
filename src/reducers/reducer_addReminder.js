import {ADD_REMINDER,REMOVE_REMINDER,REMOVEALL_REMINDER} from '../actions/type';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies'

export default function(state=[],action){
  state = read_cookie('reminders')
  switch(action.type){
    case ADD_REMINDER:
    bake_cookie('reminders',[...state, action.payload] )
    return [...state, action.payload];
    case REMOVE_REMINDER:
    let remove =  state.filter((value,index) => {
      return index !== action.payload
    })
    bake_cookie('reminders',remove)
    return remove;
    case REMOVEALL_REMINDER:
    state = [];
    bake_cookie('reminders',state)
    return state;
    default:
    return state;
  }
}
