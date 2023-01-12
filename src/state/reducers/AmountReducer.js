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

export const Islogged = (state= localStorage.getItem('authTokens') ? true : false,action) => {
    if(action.type === 'login'){
        return true
    }
    else if(action.type === 'logout'){
        localStorage.removeItem('authTokens')
        return false
    }
    else {
        return state
    }
}

export const datalist = (state= null,action) => {
    if(action.type === 'data'){
        return action.payload
    }
    else {
        return state
    }
}

export default AmountReducer