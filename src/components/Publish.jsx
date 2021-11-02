import React from 'react';
import { Fragment } from 'react';

const Publish = ({ published, togglePublished, id }) => {
  return (
    <Fragment>
      {published ? (
        <button
          onClick={(e) => {
            togglePublished(id);
            e.preventDefault();
          }}
        >
          Unpublish
        </button>
      ) : (
        <button
          onClick={(e) => {
            togglePublished(id);
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
