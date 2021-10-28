import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PostCard = (props) => {
  const { id, title, body, author, posted } = props;
  return (
    <Tile id={id}>
      <StyledLink to={{ pathname: `/posts/${id}`, state: { props } }}>
        <div>{title}</div>
        <div>{author}</div>
        <div>{posted}</div>
      </StyledLink>
    </Tile>
  );
};

export default PostCard;

const Tile = styled.div`
  display: flex;
  flex-direction: row;
  width: 600px;
  height: 50px;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  margin-bottom: auto;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
