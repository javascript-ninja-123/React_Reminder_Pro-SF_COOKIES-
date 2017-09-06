import { combineReducers } from 'redux';
import AddReminderReducer from './reducer_addReminder';
const rootReducer = combineReducers({
reminder:AddReminderReducer
});

export default rootReducer;
