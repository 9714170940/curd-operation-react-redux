import React from 'react'
import {GoogleLogin, GoogleLogout} from 'react-google-login'
import useLogin from '../components/login'

const Login = () => {

    const [{googleResponse}] = useLogin()
    return (
        <div>
            
            <GoogleLogin 
            clientId='62389959271-e9j1rk8cv9vg9em3r1fpiqs88rkeremb.apps.googleusercontent.com'
            onSuccess={googleResponse}
            onFailure={googleResponse}
            buttonText='login'
            cookiePolicy='single_host_origin' />
            <GoogleLogout
            clientId='62389959271-e9j1rk8cv9vg9em3r1fpiqs88rkeremb.apps.googleusercontent.com'
            buttonText='Logout'
            onLogoutSuccess={googleResponse}
            ></GoogleLogout>
            
        </div>
    )
}

export default Login
