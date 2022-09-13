import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Inputs from "./components/leftSideLoginForm/Inputs";
import LoginBtn from "./components/leftSideLoginForm/LoginBtn";
import loginImage from "./images/Face to face-pana 1.png";



function App() {
	return (
		<div className='container d-flex justify-content-around mt-5'>
			<div className='card mt-5 border border-0 h-75'>
				<div className='card-body text-center d-flex flex-column align-items-center'>
					<h1 className='card-title fw-bold text-wrap'>Welcome Back Younglings!</h1>

					<Inputs />

					<div className='text-left fw-400 mt-2 fw-semibold'>
						Forgot <span>password</span>?
					</div>

					<div className='form-check mt-3 '>
						<input className='form-check-input' type='checkbox' />
						<label className='form-check-label fw-semibold'>Remeber me</label>
					</div>

					<LoginBtn />

					<div className='text-left mt-3 bottom-text fw-semibold'>
						Create new <span>account</span>?
					</div>
				</div>
			</div>

			<div className='loginImage mt-5'>
				<img src={loginImage} alt='loginImage' />
			</div>
		</div>
	);
}

export default App;
