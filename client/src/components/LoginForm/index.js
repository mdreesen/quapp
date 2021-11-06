import React, { useState } from 'react';
import './login.css';
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../../utils/mutations';


const LoginForm = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [userLogin, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = event => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  // submit form
  const loginFormHandler = async event => {
    event.preventDefault();

    try {
      const { data } = await userLogin({
        variables: { ...formState }
      });
      Auth.userLogin(data.userLogin.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: ''
    });
  };

  return (
    <>
      <form className="login-section">
        <div className="label_input">
          <label id="usernameLabel" htmlFor="login-username">Email:</label>
          <div><input id="login-email-input" name="email" value={formState.email} onChange={handleChange} autoComplete="on" placeholder="Enter your email" /></div>
        </div>
        <div>
          <br />
          <div className="label_input">
            <label id="passwordLabel" htmlFor="login-password">Password:</label>
            <div><input id="login-password-input" type="password" name="password" autoComplete="on" value={formState.value} onChange={handleChange} placeholder="Enter your password" /></div>
          </div>
        </div>
        <button type="submit" id="loginModalBtn" className="login_button btn btn-primary" onClick={loginFormHandler}>Login</button>
      </form>
      {error && <div>Incorrect Login</div>}
    </>
  );
}

export default LoginForm;