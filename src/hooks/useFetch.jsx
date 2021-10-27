import { useState, useEffect } from 'react';

const useFetch = ({ query }) => {
  const [apiKey, setApiKey] = useState(null);
  const [status, setStatus] = useState(null);
  const [data, setData] = useState(null);

  const apiCall = async () => {
    setStatus('fetching');
    const response = await fetch(query.url, query.options);
    const responseData = await response.json();
    setData(responseData);
    setStatus('fetched');
  };

  useEffect(() => {
    if (!query) return;
    apiCall();
  }, [query]);

  return { status, data };
};

export default useFetch;
