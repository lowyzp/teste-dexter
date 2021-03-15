import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import React, { Fragment } from 'react';
import './App.css';
import Header from './components/header/Header';
import List from './components/content/List';
import Login from './components/login/Login'
import { isAuth } from './auth'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isAuth() ? (<Component {...props} />) : (<Redirect to={{ pathname: 'login', state: { from: props.location } }} />)
  )} />
);


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={() => <Login />} />
        <PrivateRoute path='/foods' component={() =>
          <Fragment>
            <Header />
            <List type={'foods'} />
          </Fragment>} />
        <PrivateRoute path='/people' component={() =>
          <Fragment>
            <Header />
            <List type={'people'} />
          </Fragment>} />
        <PrivateRoute path='/places' component={() =>
          <Fragment>
            <Header />
            <List type={'places'} />
          </Fragment>} />
        <PrivateRoute component={() => <Redirect to="/foods" />} />
      </Switch>
    </Router>
  );
}

export default App;
