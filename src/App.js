import { useState } from 'react';
import Login from './components/Login';
import PostsList from './components/PostsList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewPost from './components/NewPost';

function App() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [apiKey, setApiKey] = useState(null);

  const handleUsername = (e) => {
    setUsername((username) => e.target.value);
  };

  const handlePassword = (e) => {
    setPassword((password) => e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    };
    fetch('http://localhost:3000/auth/login', options)
      .then((res) => res.json())
      .then((data) => setApiKey(data));
  };

  if (!apiKey) {
    return (
      <Login
        handleUsername={handleUsername}
        handlePassword={handlePassword}
        handleLogin={handleLogin}
      />
    );
  }

  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <PostsList />
          </Route>
          <Route exact path='/new'>
            <NewPost />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
