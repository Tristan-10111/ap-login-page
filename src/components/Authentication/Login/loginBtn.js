import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginBtn() {
  let navigate = useNavigate;
    function navToDashboard(){
        navigate("./dashboard")
    }
  return (
    <div className='d-grid mt-4 w-75'>
        <button onClick={navToDashboard} type='submit' className='btn btn-success p-2 fw-bold fs-4 shadow rounded'>Login</button>
    </div>
  )
}
