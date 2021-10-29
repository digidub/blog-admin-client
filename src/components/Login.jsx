import React from 'react';
import styled from 'styled-components';

const Login = ({ handleUsername, handlePassword, handleLogin }) => {
  return (
    <LoginWrapper>
      <h1>Please Log In</h1>
      <LoginForm>
        <label htmlFor='username'>Username:</label>
        <Input type='text' name='username' onChange={handleUsername} />
        <label htmlFor='password'>Password:</label>
        <Input type='password' name='password' onChange={handlePassword} />
        <input type='submit' value='login' onClick={handleLogin} />
      </LoginForm>
    </LoginWrapper>
  );
};

export default Login;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 5px 0 5px 0;
`;
