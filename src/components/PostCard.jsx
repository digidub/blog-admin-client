import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DeleteButton from './DeleteButton';
import Publish from './Publish';
import { formatRelative, subDays } from 'date-fns';

const PostCard = (props) => {
  const {
    id,
    title,
    body,
    published,
    posted,
    deleteFunction,
    togglePublished,
  } = props;
  const post = { id, title, body, published };

  const postedDate = () => {
    const date = new Date(posted);
    return formatRelative(subDays(date, 3), new Date());
  };

  return (
    <Tile id={id}>
      <StyledLink
        to={{
          pathname: `/posts/${id}`,
          state: { post },
        }}
      >
        <Title>{title}</Title>
        <DatePosted>{postedDate()}</DatePosted>
        <div>
          <Publish
            published={published}
            togglePublished={togglePublished}
            id={id}
          />
        </div>
        <DeleteContainer>
          <DeleteButton deleteFunction={deleteFunction} id={id} />
        </DeleteContainer>
      </StyledLink>
    </Tile>
  );
};

export default PostCard;

const Tile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 600px;
  height: 50px;
  margin: 10px 0 10px 0;
  padding 0 5px 0 5px;
  box-shadow: 0 1px 2px rgb(0 0 0 / 20%);
`;

const StyledLink = styled(Link)`
  display: grid;
  grid-template-columns: 33% 33% 16.6% 16.6%;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Title = styled.div`
  color: black;
  font-weight: bold;
`;

const DatePosted = styled.div`
  color: grey;
`;

const DeleteContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
