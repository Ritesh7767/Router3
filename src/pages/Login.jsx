import React , {useContext, useState} from 'react'
import { isAuth } from '../IsAuthProvider'

const Login = () => {

    let {user, setUser} = useContext(isAuth)
    let [email, setEmail] = useState({})

    const handleChange = event => {
        setEmail({...email, [event.target.name] : event.target.value})
    }

    const handleSubmit = async event => {
        event.preventDefault()
        let obj = {
            email : email.email,
            password : email.password 
        }

        let response = await fetch(`https://reqres.in/api/users`, {
            method : 'POST',
            headers : {
                "Content-Type" : "application/json"
            },
            body : obj
        })
        response = await response.json()
        console.log(response.id)
        setUser(response.id)       
    }   

  return (
    <form onSubmit={e => handleSubmit(e)}>
        <label>Enter your email Id</label><br />
        <input type="text" name='email' placeholder='Enter your email id here' onChange={e => handleChange(e)}/><br />
        <label>Enter your password</label><br />
        <input type="text" name='password' placeholder='Enter your password here' onChange={e => handleChange(e)} /><br />
        <input type="submit" placeholder='Login' value='Login' />
    </form>
  )
}

export default Login