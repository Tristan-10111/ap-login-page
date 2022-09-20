import React from 'react'
import Inputs from './functions/inputs'
import LoginBtn from './functions/loginBtn'
import LoginImage from '../../images/Face to face-pana 1.png'
import {Link} from "react-router-dom"

export default function LoginPage() {

    // let navigate = useNavigate;
    // function navToSingUp(){
    //     navigate("./SignUpPage")
    // }

      return (
    <div className='container d-flex justify-content-around mt-5 '>
			<div className='card mt-5 border border-0 h-75'>
				<div className='card-body text-center d-flex flex-column align-items-center'>
					<h1 className='card-title fw-bold text-wrap'>Welcome Back Younglings!</h1>

					{/* <form> */}
					<Inputs />

					<div className='text-left fw-400 mt-2 fw-semibold smallText3'>
						Forgot <span>password</span>?
					</div>

					<div className='form-check mt-3 smallText2'>
						<input className='form-check-input' type='checkbox' />
						<label className='form-check-label fw-semibold'>Remember me</label>
					</div>

					<LoginBtn />
					{/* </form> */}

                    <Link to="/SignUpPage" className='link'>
					<div className='text-left mt-3 bottom-text fw-semibold smallText'>
						Create new <span>account</span>?
					</div>
                    </Link>
				</div>
			</div>

			<div className='loginImage mt-5'>
				<img src={LoginImage} alt='loginImage' />
			</div>
		</div>
  )
}
