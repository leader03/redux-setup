import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionsCreators} from './state/index'
import useAxios from './utils/useAxios'

function Shop() {
    const dispatch = useDispatch()
    // using bindactionscreator and without destructor
    // const actions = bindActionCreators(actionsCreators,dispatch)
    // using bindactionscreatoe and with destructor
    const {withdrawMoney, depositMoney,addValue,dataList} = bindActionCreators(actionsCreators,dispatch)

    const datas = useSelector(state => state.datas)
    console.log(datas);
    const api = useAxios()
    useEffect(()=>{
      getData() 
    },[])
    let getData= async() =>{
      let response = await api.get('/api/hotelhome/')
      if(response.status === 200){
         dataList(response.data)
      }
  }
    
  return (
    <>
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
    <div>
        <h1>list of data</h1>
        {datas?.map((data)=> (
            <h1 key={data.id}>
              {data.name}
            </h1>
        ))}
    </div>
    </>
  )
}

export default Shop