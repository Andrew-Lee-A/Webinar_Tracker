import React from 'react'
import {Routes, Route} from 'react-router-dom'

// pages
import Home from './components/Home/HomeIndex'
import Login from './components/LoginPage/Login'
import Register from './components/RegisterPage/Register'
import Dashboard from './components/DashboardPage/Dashboard'
// import ForgetPassword from './components/ForgetPasswordPage/ForgetPassword'
import UserDetails from './components/AdditionalDetailsPage/UserDetails'
import UserProfile from './components/UserProfilePage/UserProfile'

export default function App() {
  return (
      <div className='App'>
        <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/userdetails' element={<UserDetails/>} />
            <Route path='/userprofile' element={<UserProfile/>} />
            {/* <Route path='/forget-password' element={<ForgetPassword/>} /> */}
        </Routes>
      </div>
  )
}
