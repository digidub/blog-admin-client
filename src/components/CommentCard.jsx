import React from 'react';
import styled from 'styled-components';
import DeleteButton from './DeleteButton';

const CommentCard = (props) => {
  return (
    <Tile id={props.id}>
      <p>{props.body}</p>
      <p>{props.email}</p>
      <p>{props.datePosted}</p>
      <DeleteButton id={props.id} deleteFunction={props.deleteFunction} />
    </Tile>
  );
};

export default CommentCard;

const Tile = styled.div`
  width: 600px;
  height: 50px;
  margin: 10px 0 10px 0;
  box-shadow: 0 1px 2px rgb(0 0 0 / 10%);
  display: grid;
  grid-template-columns: repeat(4, 25%);
`;
