import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/LoginPage.css';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId = "262094449656-nvmsaa1104aaj94fdqt1ob5dd0cmuc8a.apps.googleusercontent.com";

const SignInPage = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [showLoginButton, setShowLoginButton] = useState(true);
  const [showLogoutButton, setShowLogoutButton] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;

    if (!username || !password) {
      setErrorMessage('Please enter a username and password.');
      setTimeout(() => {
        setErrorMessage('');
      }, 2000);
      return;
    }

    console.log('Valid submission:', username, password);
    setIsLoggedIn(true);
    navigate('/dashboard'); // Navigate to the Dashboard component upon successful login
  };

  const handleGoogleSignInSuccess = (res) => {
    console.log('Login Success:', res.profileObj);
    setShowLoginButton(false);
    setShowLogoutButton(true);
  };

  const handleGoogleSignInFailure = (res) => {
    console.log('Login Failed:', res);
  };

  const handleSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    setShowLoginButton(true);
    setShowLogoutButton(false);
    setIsLoggedIn(false);
    navigate('/dashboard'); // Navigate to the login page upon logout
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/dashboard'); // Automatically navigate to the Dashboard component if the user is logged in
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="main_Container">
      <h1>SignIn</h1>
      <h3>Sign in Into Your Account</h3>
      <div className="box">
        <div className='button-container'>
          <div>
            {showLoginButton && (
              <GoogleLogin
                clientId={clientId}
                buttonText="Sign In"
                onSuccess={handleGoogleSignInSuccess}
                onFailure={handleGoogleSignInFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
              />
            )}
            {showLogoutButton && (
              <GoogleLogout
                clientId={clientId}
                buttonText="Sign Out"
                onLogoutSuccess={handleSignoutSuccess}
              />
            )}
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <input className='username' type="text" name="username" placeholder="Username" />
            <input className='password' type="password" name="password" placeholder="Password" />
            <a className='forgot_pwd' href="#">Forgot password?</a>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <div className='button-container'>
              <button className="SignIn_btn">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
