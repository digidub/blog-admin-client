import React from 'react';

const Login = ({ handleUsername, handlePassword, handleLogin }) => {
  return (
    <div>
      <form>
        <label htmlFor='username'>username</label>
        <input type='text' name='username' onChange={handleUsername} />
        <label htmlFor='password'>password</label>
        <input type='password' name='password' onChange={handlePassword} />
        <input type='submit' value='login' onClick={handleLogin} />
      </form>
    </div>
  );
};

export default Login;
