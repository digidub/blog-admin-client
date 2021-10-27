import { useState, useEffect } from 'react';

const useFetch = (props) => {
  const [state, setState] = useState({
    loading: true,
    error: false,
    data: null,
  });

  useEffect(() => {
    fetch(props.url, props.options)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then((data) => {
        setState({ loading: false, error: false, data });
      })
      .catch((error) => setState({ loading: false, error, data: [] }));
  }, []);

  return state;
};

export default useFetch;
