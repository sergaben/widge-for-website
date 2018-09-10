import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import income from './income-reducer'

export default combineReducers({
    routing,
    income
})