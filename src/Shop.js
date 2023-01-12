import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionsCreators} from './state/index'

function Shop() {
    const dispatch = useDispatch()
    // using bindactionscreator and without destructor
    // const actions = bindActionCreators(actionsCreators,dispatch)

    // using bindactionscreatoe and with destructor
    const {withdrawMoney, depositMoney,addValue} = bindActionCreators(actionsCreators,dispatch)
  return (
    <div>
        {/* without using bindactionscreator */}
        {/* <button onClick={()=>{dispatch(actionsCreators.depositMoney(100))}}>Plus</button>
        <h1>Add to cart</h1>
        <button onClick={()=>{dispatch(actionsCreators.withdrawMoney(100))}}>Minus</button> */}

        {/* with using bindactionscreator and without destructor */}
        {/* <button onClick={()=>{actions.depositMoney(100)}}>Plus</button>
        <h1>Add to cart</h1>
        <button onClick={()=>{actions.withdrawMoney(100)}} >Minus</button> */}

        {/* with using bindactionscreator and with destructor also */}
        <button onClick={()=>{depositMoney(100)}}>Plus</button>
        <h1>Add to Cart</h1>
        <button onClick={()=>{withdrawMoney(100)}}>Minus</button>
        <button onClick={()=>{addValue(10)}}>Click Here</button>


    </div>
  )
}

export default Shop