// this contains actions which has to be perform by reducer or simply it gives command to perform this actions to the reducers
export const depositMoney =(amount)=>{
return (dispatch)=>{
        dispatch({
            type: 'deposit',
            payload:amount
        })
}
}
export const withdrawMoney =(amount)=>{
    return (dispatch)=>{
        dispatch({
            type:'withdraw',
            payload:amount
        })
    }
}
export const addValue = (amount) => {
    return (dispatch) => {
        dispatch({
            type:'add',
            payload:amount
        })
    }
}
export const isLoggedIn = () => {
    return (dispatch) => {
        dispatch({
            type:'login'
        })
    }
}
export const isLoggedOut = () => {
    return (dispatch) => {
        dispatch({
            type:'logout'
        })
    }
}
export const dataList = (data) => {
    return (dispatch) => {
        dispatch({
            type:'data',
            payload:data
        })
    }
}