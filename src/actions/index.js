import {ADD_REMINDER,REMOVE_REMINDER,REMOVEALL_REMINDER} from './type';
import moment from 'moment';

export function addReminder(text,date){
  const payload = {
    text,
    date: moment(new Date(date)).fromNow()
  };
  return{
    type:ADD_REMINDER,
    payload
  }
}

export function removeReminder(index){
  return{
    type:REMOVE_REMINDER,
    payload:index
  }
}

export function removeAllReminder(){
  return{
    type:REMOVEALL_REMINDER
  }
}
