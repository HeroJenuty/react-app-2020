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
import HeaderNavbar from './components/Navbar';
import FunctionalComponent from './components/FunctionalComponent';

function App() {
  return (
    <Router>
      <HeaderNavbar />
      <FunctionalComponent title="Hi Functional Component"
        description="Test description">
        <div className="alert alert-danger">
          This is a primary alert—check it out!
        </div>
      </FunctionalComponent>
      <FunctionalComponent title="Hi Functional Component"
        description="Test description">
        <div className="alert alert-success">
          This is a primary alert—check it out!
        </div>
      </FunctionalComponent>
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
