const fetchAll = (url) => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(url, options)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
};

const fetchPost = (url) => {
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  return fetch(url, options)
    .then((data) => data)
    .catch((err) => console.log(err));
};

const create = (url, title, body) => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, body }),
  };
  fetch(url, options)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
};

const update = (url, newObject) => {
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newObject),
  };
  return fetch(url, options)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
};

const remove = (url) => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(url, options)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
};

export default { fetchAll, fetchPost, create, update, remove };
