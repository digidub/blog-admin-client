import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DeleteButton from './DeleteButton';
import Publish from './Publish';

const PostCard = (props) => {
  const { id, title, published, posted, deletePost, togglePublished } = props;

  return (
    <Tile id={id}>
      <StyledLink to={{ pathname: `/posts/${id}`, state: { props } }}>
        <div>{title}</div>
        <div>{posted}</div>
        <div>
          <Publish
            published={published}
            togglePublished={togglePublished}
            id={id}
          />
        </div>
        <div>
          <DeleteButton url={`/posts/${id}`} deletePost={deletePost} id={id} />
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
  grid-template-columns: repeat(4, 25%);
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
