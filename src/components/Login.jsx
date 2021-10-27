import React from 'react';

const Login = () => {
  return (
    <div>
      <form>
        <label for='username'>username</label>
        <input type='text' name='username' />
        <label for='password'>password</label>
        <input type='password' name='password' />
        <input type='submit' value='login' />
      </form>
    </div>
  );
};

export default Login;
