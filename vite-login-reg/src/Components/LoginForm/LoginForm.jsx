import React from 'react';
import './LoginForm.css';
import { FaUserAstronaut } from "react-icons/fa";
import { MdLockPerson } from "react-icons/md";

export const LoginForm = () => {
  return (
    <div className='wrapper'>
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder='Username' required />
            <FaUserAstronaut className='icon' />
          </div>
          <div className="input-box">
            <input type="password" placeholder='Password' required />
            <MdLockPerson className='icon' />
          </div>

          <div className="remember-forgot">
            <label><input type="checkbox" />Remember me</label>
            <a herf="#">Forgot password?</a>
          </div>

          <button type="submit">Log in</button>

          <div className="register-link">
          </div>
        </form>
      </div>
  );
};

export default LoginForm;