import {userList} from './reducers';
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    userList
})

export {rootReducer}