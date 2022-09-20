import React from 'react'
import SignUpImg from '../../../images/Remote meeting-cuate 1.png'
import {Link} from 'react-router-dom'
import './SignUpPage.css'

 function SignUpPage() {
  return (
 <div className='container d-flex justify-content-around mt-5'>
   <div className='card mt-5 border border-0 h-75'>
     <div className='card-body text-center d-flex flex-column align-items-center'>
       <h1 className='card-title fw-bold text-wrap'>Welcome Younglings!</h1>

      {/* sign up Inputs */}
       <div className="w-75 mt-4 d-flex flex-column"  >
		    	<div className='input-group mb-3'style={{witdh:'2000px'}}>
		    		<input type="email" className='form-control p-2 fw-semibold fs-5' placeholder='Email' required />
		    	</div>

			    <div className='input-group mb-3'>
			    	<input type='password' className='form-control p-2 fw-semibold fs-5' placeholder='Name' />
			    </div>

			    <div className='input-group mb-2'>
			    	<input type='password' className='form-control p-2 fw-semibold fs-5' placeholder='Password' />
			    </div>
		   </div>

        {/* sign up btn */}
       <div className='d-grid mt-4 w-75'>
        <button type='submit' className='btn btn-success p-2 fw-bold fs-4'>Sign up</button>
       </div>

       <Link to='/' className='link2 fw-semibold'>
         <span>Login</span> to an existing account
       </Link>

     </div>
   </div>

   <div className='Signupmage mt-4' >
     <img src={SignUpImg} alt='SignupImage' />
   </div>
 </div>
 )
}
export default SignUpPage;