import React from 'react'
import { useState } from 'react';
import GoogleLogin from 'react-google-login'
import { useNavigate } from 'react-router-dom';

function SigninWithGoogle() {
  // const [isAuth, setIsAuth] = useState(false)
  const navigate=useNavigate()
  let googleSuccess = (response) => {
    console.log(response);
    console.log(response.profileObj)
    // setIsAuth(true)
    // navigate('')
  }
  let googleFailure = (response) => {
    console.log(response);
    setIsAuth(false)
    }
  return (
    <GoogleLogin
      clientId='62223785118-7ehbulfopl0d7hb1qr67vr4r7fr934qf.apps.googleusercontent.com'
   
      buttonText='Login With Google'
      onSuccess={googleSuccess}
      onFailure={googleFailure}
      cookiePolicy="single_host_origin"
      />
  )
}

export default SigninWithGoogle
