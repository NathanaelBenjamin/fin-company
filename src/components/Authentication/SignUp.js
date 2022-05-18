
import React, { useState } from "react";
import './auth.css'



function SignUp() {
    const defaultformfield = {
        displayName: '',
        email: '',
        country: '',
        password: '',
        confirmpassword: '',

    }
    const [formfield, setformfield] = useState(defaultformfield)
    const { displayName, email, country, password, confirmpassword } = formfield

    const handleChange = (event) => {
        const { name, value } = event.target;

        setformfield({ ...formfield, [name]: value })
    }

    const submitHandler = (e) => {
        e.preventDefault();

        sessionStorage.setItem('userDetails', JSON.stringify({ ...formfield }))

        if (password !== confirmpassword) {
            alert('Passwords do not match')
        } else {
            window.location = '/dashboard'
        }



    }

    return (

        <div className="forms">

            <form onSubmit={submitHandler}>
                <h1>Don't Have An Account? Sign Up</h1>
                <label>Full Name</label>
                <input type='text' onChange={handleChange} name='displayName' value={displayName} /><br />
                <label>Email</label>
                <input type="email" required onChange={handleChange} name='email' value={email} /><br />
                <label>Country </label>
                <input type="text" required onChange={handleChange} name='country' value={country} /><br />
                <label>Password</label>
                <input type='password' onChange={handleChange} name='password' value={password} /><br /><br />
                <label>Confirm Password</label>
                <input type='password' onChange={handleChange} name='confirmpassword' value={confirmpassword} />
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <input type="checkbox" style={{ width: "25px", margin: "-7px 7px 0 0" }} id="readTerms" />
                    <p >I have read, understood and i agree to the terms and conditions</p>
                </div>
                <button type='submit'>Click Here To Sign Up</button>

            </form>
        </div>
    );
}

export default SignUp;