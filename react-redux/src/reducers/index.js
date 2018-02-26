import {combineReducers} from 'redux';//一个方法
import counter from './counter';
import update from './update';
export default combineReducers({
    counter,
    update
})