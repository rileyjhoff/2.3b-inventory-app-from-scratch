import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import AuthPage from './components/AuthPage';
import ListPage from './components/ListPage';
import CreatePage from './components/CreatePage';
import UpdatePage from './components/UpdatePage';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <NavLink to="/list">Home</NavLink>
          <NavLink to="/create">Create</NavLink>
          <Button>Logout</Button>
        </header>
        <main>
          <Switch>
            <Route exact path="/"></Route>
            <Route exact path="/list"></Route>
            <Route exact path="/item/:id"></Route>
            <Route exact path="/create"></Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
