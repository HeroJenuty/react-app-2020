import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ClassComponent from './components/ClassComponent';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Users from './pages/Users';

function App() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
  
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/profile" exact>
              <Profile />
            </Route>
            <Route path="/users" exact>
              <Users />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  







  // return (
  //   <div className="App">
  //     <ClassComponent description="Test props" subtitle="Test subtitle"/>
  //   </div>
  // );


export default App;
