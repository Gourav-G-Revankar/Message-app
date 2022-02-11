import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import FrontPage from './components/FrontPage';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/frontpage" exact component={FrontPage} />
        <Route path="/profile" exact component={Profile} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
