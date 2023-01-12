// this is one kind of reducer which is used to change state
const AmountReducer = (state=0,action)=>{
    if(action.type === 'deposit'){
        return state + action.payload
    }
    else if(action.type === 'withdraw'){
        return state - action.payload
    }
    else{
        return state 
    }
}

export const AddValue = (state=10,action) => {
    if(action.type === 'add'){
        return state + action.payload
    }
    else {
        return state
    }
}

export const Islogged = (state=false,action) => {
    if(action.type === 'login'){
        return !state
    }
    else if(action.type === 'logout'){
        return false
    }
    else {
        return state
    }
}

export default AmountReducer