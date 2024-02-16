import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SearchBar from '../Components/SearchBar'
import HomePage from '../Components/HomePage'
import LoginPage from '../pages/LoginPage'
import SignupPage from '../pages/SignupPage'
import Dashboard from '../Components/Dashboard'

const SearchBarRoute = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<SearchBar/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default SearchBarRoute
