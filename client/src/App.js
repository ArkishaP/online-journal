import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import jwt_decode from "jwt-decode"
import setAuthToken from "./utils/setAuthToken"
import { setCurrentUser, logoutUser } from "./actions/authActions"
import { Provider } from "react-redux"
import store from "./store"

import Navbar from "./components/layout/Navbar"
import Landing from "./components/layout/Landing"
import Register from "./components/auth/Register"
import Login from "./components/auth/Login"
import Calendar from "./components/dashboard/Calendar"
import Timeline from "./components/dashboard/Timeline"
import Journal from "./components/dashboard/Journal"
import EditPost from "./components/journal/EditPost"
import ViewPost from "./components/journal/ViewPost"

import './App.css';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken)
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken)
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded))

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser())
    // TODO: Clear current Profile

    // Redirect to login
    window.location.href = "/login"

  }
}

class App extends Component {
  render(props) {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container-fluid">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/dashboard" component={Calendar} />
              <Route exact path="/calendar" component={Calendar} />
              <Route exact path="/timeline" component={Timeline} />
              <Route exact path="/journal" component={Journal} />
              <Route exact path="/journal/new" component={EditPost} />
              <Route exact path="/journal/edit" component={EditPost} />
              <Route exact path="/journal/view" component={ViewPost} />
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
