import {combineReducers} from 'redux';
import loginReducer from '../../screens/Login/reducer';
import searchReducer from '../../screens/Dashboard/reducer';
import locationReducer from './locationReducer';
import activityReducer from '../../screens/User/reducer';

export default combineReducers({
    login: loginReducer,
    search: searchReducer,
    location:locationReducer,
    activity: activityReducer
})