import React from "react";

export default function Inputs() {
	return (
		<div className="w-75 mt-3 d-flex flex-column">
			<div className='input-group mb-3'>
				<input type="email" className='form-control p-2 fw-400 fs-5' placeholder='Email' required />
			</div>

			<div className='input-group mb-3'>
				<input type='password' className='form-control p-2 fw-400 fs-5' placeholder='Password' />
			</div>
		</div>
	);
}


