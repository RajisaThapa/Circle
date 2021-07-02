import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from './Firebase';
import"./Login.css"
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
    const [state , dispatch] = useStateValue();

    const signIn = () => {
        //Sign In
auth.signInWithPopup(provider)
.then((result) => {

    dispatch({
        type : actionTypes.SET_USER,
        user: result.user,
    })

})
.catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://thumbs.dreamstime.com/b/colorful-circle-group-people-togetherness-unity-logo-design-vector-symbol-illustration-colorful-circle-group-people-157712987.jpg"
                    alt="">
                </img>
                
                <h2 >circle</h2>
                </div>
                    <Button type="submit" onClick={signIn}>
                        Sign In
                    </Button>
        </div>
    );
}

export default Login
