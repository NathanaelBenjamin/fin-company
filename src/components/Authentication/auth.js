import React from 'react';
import Signinform from './SignIn';
import Signupform from './SignUp';

function Auth(props) {
    return (
        <div>
            <Signinform />
            <Signupform />
        </div>
    );
}

export default Auth;