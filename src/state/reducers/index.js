// this is used to combine all types of reducer together and export them
import { combineReducers } from "redux"
import AmountReducer, { Islogged, AddValue } from "./AmountReducer"

const reducers = combineReducers({
    // here all types reducer is export where amountReducer is one kind of reducer
    amount: AmountReducer,
    value: AddValue,
    auth: Islogged
})

export default reducers