import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom';

const clientId = "601594657871-voe061c61b033gsniku88khnf1oe383g.apps.googleusercontent.com";

function Google() {
  const navigate = useNavigate();

  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);

  const onLoginSuccess = (res) => {
    console.log('Login Success:', res.profileObj);
    setShowloginButton(false);
    setShowlogoutButton(true);
    navigate('/dashboard'); // Navigate to the next page
  };

  const onLoginFailure = (res) => {
    console.log('Login Failed:', res);
  };

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
  };

  return (
    <div>
      {showloginButton ? (
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign In"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
      ) : null}

      {showlogoutButton ? (
        <GoogleLogout
          clientId={clientId}
          buttonText="Sign Out"
          onLogoutSuccess={onSignoutSuccess}
        />
      ) : null}
    </div>
  );
}

export default Google;
