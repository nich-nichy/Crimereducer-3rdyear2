import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

    export default function Auth() {
        const [isSignUp, setIsSignUp] = useState(false);

        return (
            <div>
                {isSignUp ? <Login /> 
                : <Register /> }
            </div>
        )
    }
    