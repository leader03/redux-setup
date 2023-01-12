import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionsCreators } from './state'

function Navbar() {
    const amount = useSelector(state => state.amount)
    const value = useSelector(state => state.value)
    const dispatch = useDispatch()
    const {isLoggedOut} = bindActionCreators(actionsCreators,dispatch)
  return (
    <div className=' sticky top-0 h-16 bg-red-500 flex items-center justify-between px-16 font-normal text-lg text-white'>
        <h3>Shorts Downloader</h3>
        <div className='flex gap-2'>
          <h3>Home</h3>
          <h3>English</h3>
          <button disabled={true}>{amount}</button>
          <button disabled>{value}</button>
          <button onClick={()=>{isLoggedOut()}}>Logout</button>
        </div>
      </div>
  )
}

export default Navbar