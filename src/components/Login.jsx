import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { actionsCreators } from '../state'
import App from '../App'

const Login = () => {
    const baseurl = 'https://vips.vipsnepal.com'
    // const [authTokens,setAuthTokens] = useState(()=>localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null) 


    const dispatch = useDispatch()
    const isLogged = useSelector(state => state.auth)
    console.log(isLogged);
    const {isLoggedIn} = bindActionCreators(actionsCreators,dispatch)


    let loginUser = async (e) => {
        e.preventDefault()
        let response = await fetch(`${baseurl}/api/login/`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'username':e.target.username.value,'password':e.target.password.value})
        })
        let data = await response.json()
        if(response.status === 200){
            // setAuthTokens(data)
            localStorage.setItem('authTokens', JSON.stringify(data))
            isLoggedIn()
        }

    }
  return (
    !isLogged ? 
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
           Sign in 
        </h1>
        <form onSubmit={loginUser} className="mt-6">
            <div className="mb-2">
                <label
                    for="username"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Username
                </label>
                <input
                    name='username'
                    type="username"
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <div className="mb-2">
                <label
                    for="password"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Password
                </label>
                <input
                    name='password'
                    type="password"
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <Link
                to='/'
                className="text-xs text-purple-600 hover:underline"
            >
                Forget Password?
            </Link>
            <div className="mt-6">
                <button 
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                >
                    Login
                </button>
            </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Don't have an account?{" "}
            <Link
                to='/'
                className="font-medium text-purple-600 hover:underline"
            >
                Sign up
            </Link>
        </p>
    </div>
    </div>
    : <App />
    
  )
}

export default Login