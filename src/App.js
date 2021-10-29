import { useState, useContext } from 'react';
import Login from './components/Login';
import PostsList from './components/PostsList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewPost from './components/NewPost';
import EditPost from './components/EditPost';
import { AuthContext } from './AuthContext';
import Navbar from './components/NavBar';

function App() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [auth, setAuth] = useState(null);

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
    fetch('/auth/login', options)
      .then((res) => res.json())
      .then((data) => setAuth(data.token));
  };

  if (!auth) {
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
      <AuthContext.Provider value={[auth]}>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <PostsList />
            </Route>
            <Route exact path='/new'>
              <NewPost />
            </Route>
            <Route path='/posts/:id'>
              <EditPost />
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
