import React from 'react';
import styled from 'styled-components';

const Notification = ({ type, message }) => {
  if (!message) return null;
  if (type === 'error') return <Error>{message}</Error>;
  if (type === 'success') return <Success>{message}</Success>;
};

export default Notification;

const Success = styled.div`
  color: green;
`;

const Error = styled.div`
  color: red;
`;
