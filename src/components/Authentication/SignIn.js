import React, { useState, useEffect } from 'react';
import {
    auth,
    createUserDocumentFromAuth,
    signInWithEmailAndPasswordAuth,
    siginWithGooglePopup
} from '../../utils/firebase/firebase.utils';
import { signInWithPopup } from 'firebase/auth';
import { getRedirectResult } from 'firebase/auth';
import FormInput from '../form-input/formInput';



const defaultformfield = {

    Email: '',
    password: '',

}
function Signinform() {
    const [Formfield, setFormfield] = useState(defaultformfield);
    const { email, password, } = Formfield;



    const handlechange = (event) => {
        const { name, value } = event.target

        setFormfield({ ...Formfield, [name]: value })
    };

    // console.log(Formfield);


    const signInWithGoogle = async () => {
        await siginWithGooglePopup();
    };


    useEffect(() => async () => {
        const { user } = await getRedirectResult(auth);
        if (user) {
            const userDocRef = await createUserDocumentFromAuth(user);
        }
    }, []);


    const resetformfields = () => (
        setFormfield(defaultformfield))


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { user } = await signInWithEmailAndPasswordAuth(email, password);

            resetformfields()

        } catch (error) {
            switch (error.code) {
                case 'auth/user-not-found':
                    alert('You do not have an account. Sign Up');
                    break;
                case 'auth/wrong-password':
                    alert('incorrect password');
                default:
                    console.log(error);

            }
        }

    };

    return (
        <div>
            <h2>Already have an account</h2>

            <span>Sign In with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email' type="email" required onChange={handlechange} name='email' value={email} />
                <FormInput label='Password' type='password' required onChange={handlechange} name='password' value={password} />
                <button onClick={signInWithEmailAndPasswordAuth} type='submit'>Sign In</button>
                <button onClick={signInWithGoogle}>Google sign in</button>

            </form>

        </div>
    );
}

export default Signinform;