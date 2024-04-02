import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Producst from './pages/Producst'
import Contact from './pages/Contact'
import Login from './pages/Login'
import PrivateRoute from './PrivateRoute'

const RoutingLayout = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<PrivateRoute><Producst/></PrivateRoute>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
    </Routes>
  )
}

export default RoutingLayout