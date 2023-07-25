import React from 'react'
import { Link } from 'react-router-dom'
import "./login.css"
const Login = () => {
  return (
    <div className='log_form'>
      <form>
      <br/><br/>
      <h1>Login-Form</h1>
      <br/><br/>
      <div class="form-floating">
      <input type="email" class="form-control" id="floatingPassword" placeholder="email" style={{width:"20rem"}} autoFocus/>
      <label for="floatingPassword">Email</label>
    </div>
      <br/>
      
      <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" style={{width:"20rem"}}/>
      <label for="floatingPassword">Password</label>
    </div>
      <br/>
      <br/>
      <button className='btn btn-primary mx-2'>login</button> 
        <Link to='/registration' className='btn btn-success mx-3'>Already Account</Link> 
      </form>
    </div>
  )
}

export default Login
