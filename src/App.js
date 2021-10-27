import { useState } from 'react';
import Login from './components/Login';
import PostsList from './components/PostsList';

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

  return (
    <div className='App'>
      {!apiKey && (
        <Login
          handleUsername={handleUsername}
          handlePassword={handlePassword}
          handleLogin={handleLogin}
        />
      )}
      {apiKey && <PostsList />}
    </div>
  );
}

export default App;
