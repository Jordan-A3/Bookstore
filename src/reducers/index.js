import {combineReducers} from 'redux'

import NewOne from './addBook'
import getBooks from './getBooks'
import upBooks from './updateBook'
import handleAuth from './auth'

export default combineReducers({
    NewOne,
    getBooks,
    upBooks,
    handleAuth
})
