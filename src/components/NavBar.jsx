import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <NavBar>
      <NavLinks>
        <li>
          <StyledLink
            exact
            to='/'
            activeStyle={{
              color: '#006CAA',
            }}
          >
            Dashboard
          </StyledLink>
        </li>
        <li>
          <StyledLink
            exact
            to='/new'
            activeStyle={{
              color: '#006CAA',
            }}
          >
            New Post
          </StyledLink>
        </li>
      </NavLinks>
    </NavBar>
  );
};

export default Navbar;

const NavBar = styled.div`
  background-color: #fff;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NavLinks = styled.ul`
  width: 800px;
  max-width: 800px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
  list-style-type: none;
  padding: 0px;
  @media (max-width: 700px) {
    max-width: 300px;
  }
`;

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-weight: 600;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:hover {
    color: #006caa;
    transition: all 0.2s ease;
  }
`;
