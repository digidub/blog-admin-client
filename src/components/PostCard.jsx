import React from 'react';
import styled from 'styled-components';

const PostCard = ({ title, author, posted }) => {
  return (
    <Tile>
      <div>{title}</div>
      <div>{author}</div>
      <div>{posted}</div>
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
