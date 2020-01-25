import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Profile from './pages/Profile';
import Users from './pages/Users';
import HeaderNavbar from './components/Navbar';


const Layout = props => {
  return (
    <>
      <HeaderNavbar></HeaderNavbar>
      <div className="container pt-5">
        {props.children}
      </div>
    </>
  )
}




function App() {
  return (
    <Router>
      {/* <FunctionalComponent count={1} step={1} />
      <FunctionalComponent count={2} step={3} /> */}

        <Switch>
          <Route path="/" exact>
            <Layout>
              <Home />
            </Layout>
          </Route>
          <Route path="/profile">
            <Layout>
              <Profile />
            </Layout>
          </Route>
          <Route path="/users">
            <Layout>
              <Users />
            </Layout>
          </Route>
        </Switch>
    </Router>
  );
}


// return (
//   <div className="App">
//     <ClassComponent description="Test props" subtitle="Test subtitle"/>
//   </div>
// );


export default App;
