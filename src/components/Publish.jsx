import React from 'react';
import { Fragment } from 'react';

const Publish = ({ published, updatePublishedState, id }) => {
  return (
    <Fragment>
      {published ? (
        <button
          onClick={(e) => {
            updatePublishedState(id);
            e.preventDefault();
          }}
        >
          Unpublish
        </button>
      ) : (
        <button
          onClick={(e) => {
            updatePublishedState(id);
            e.preventDefault();
          }}
        >
          Publish
        </button>
      )}
    </Fragment>
  );
};

export default Publish;
