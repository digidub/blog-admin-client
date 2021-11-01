import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DeleteButton from './DeleteButton';

const PostCard = (props) => {
  const { id, title, body, author, posted } = props;

  return (
    <Tile id={id}>
      <StyledLink to={{ pathname: `/posts/${id}`, state: { props } }}>
        <div>{title}</div>
        <div>{author}</div>
        <div>{posted}</div>
        <div>Publish</div>
        <div>
          <DeleteButton url={`/posts/${id}`} />
        </div>
      </StyledLink>
    </Tile>
  );
};

export default PostCard;

const Tile = styled.div`
  width: 600px;
  height: 50px;
  margin: 10px 0 10px 0;
  box-shadow: 0 1px 2px rgb(0 0 0 / 10%);
`;

const StyledLink = styled(Link)`
  display: grid;
  grid-template-columns: repeat(5, 20%);
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
