import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { getUser, logout } from './services/fetch-utils.js';
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import AuthPage from './components/AuthPage';
import ListPage from './components/ListPage';
import CreatePage from './components/CreatePage';
import UpdatePage from './components/UpdatePage';

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const user = getUser();
    setUser(user);
  }, []);

  async function handleLogout() {
    await logout();
    setUser({});
  }

  return (
    <Router>
      <div className="App">
        <header>
          {user && (
            <>
              <NavLink to="/list">Home</NavLink>
              <NavLink to="/create">Create</NavLink>
              <Button size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </>
          )}
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              {user ? <Redirect to="/list" /> : <AuthPage setUser={setUser} />}
            </Route>
            <Route exact path="/list">
              {user ? <ListPage /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/item/:id">
              {user ? <UpdatePage /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/create">
              {user ? <CreatePage /> : <Redirect to="/" />}
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
