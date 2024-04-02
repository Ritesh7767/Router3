import React, { useContext } from 'react'
import { isAuth } from './IsAuthProvider'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {

    let {user} = useContext(isAuth)

  return (
    user ? children : <Navigate to='/login'/>
  )
}

export default PrivateRoute