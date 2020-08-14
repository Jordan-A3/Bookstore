import {combineReducers} from 'redux'

import NewOne from './addBook'
import upBooks from './updateBook'
import handleAuth from './auth'

export default combineReducers({
    NewOne,
    upBooks,
    handleAuth
})
