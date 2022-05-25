import React, { useState, } from 'react';
import { createUserDocumentFromAuth, createEmailAndPasswordAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/formInput';

const defaultformfield = {
  displayName: '',
  Email: '',
  password: '',
  confirmPassword: ''
}
function Signupform() {
  const [Formfield, setFormfield] = useState(defaultformfield);
  const { displayName, email, password, confirmPassword } = Formfield;


  const handlechange = (event) => {
    const { name, value } = event.target

    setFormfield({ ...Formfield, [name]: value })
  };

  console.log(Formfield);



  const resetformfields = () => (
    setFormfield(defaultformfield))


  const handleSubmit = (async (e) => {
    e.preventDefault();
    if (password != confirmPassword) {
      alert('password and confirm password do not match')
    } else {
      window.location = '/dashboard'
        ;
    }
    try {
      const { user } = await createEmailAndPasswordAuth(email, password);
      console.log(user);
      await createUserDocumentFromAuth(user, { displayName })

      resetformfields()
      window.location = '/dashoard'
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('email already in use');
      } else if (error.code === 'auth/network-request-failed') {
        alert('check network connection');
      } else {
        console.log('user creation not complete', error);

      }
    }

  });

  return (
    <div>
      <h2>Dont have an account?</h2>

      <span>Sign Up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Name' type='text' required onChange={handlechange} name='displayName' value={displayName} />
        <FormInput label='Email' type="email" required onChange={handlechange} name='email' value={email} />
        <FormInput label='Password' type='password' required onChange={handlechange} name='password' value={password} />
        <FormInput label='Confirmpassword' type='password' required onChange={handlechange} name='confirmPassword' value={confirmPassword} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Signupform;