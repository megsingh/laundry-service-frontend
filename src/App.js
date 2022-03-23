import './App.css';
import Footer from './components/footer'
import Header from "./components/Header"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState } from "react"
import PastOrders from "./routes/Past Orders page/PastOrders"
import Create from "./routes/Create"
import Register from "./routes/Register"
import Signin from "./routes/Signin"
import SideNavbar from "./components/SideNavbar.jsx"
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import NoFoundComponent from './routes/NoFoundComponent';

function App() {
  const token = localStorage.getItem("token")
  let isAuthenticated
  if (token === null) {
    isAuthenticated = false
  } else {
    isAuthenticated = true
  }

  console.log("is user authenticated", isAuthenticated);
  return (
    <Router>
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <div className="footer">
          <Footer />
        </div>
       
        {/* <PublicRoute exact path="/" isAuthenticated={isAuthenticated}>
          <div className="signin__page">
            <Signin />
          </div>

        </PublicRoute>
        <PublicRoute exact path="/register" isAuthenticated={isAuthenticated}>
          <div className="register__page">
            <Register />
          </div>
        </PublicRoute>

        <PrivateRoute exact path="/create" isAuthenticated={isAuthenticated}>
          <div>
            <div className='sidebar__create'>
              <SideNavbar />
            </div>
            <div className="createOrder">
              <Create />
            </div>
          </div>

        </PrivateRoute> 

        <PrivateRoute exact path="/orders" isAuthenticated={isAuthenticated}>
          <div>
            <div className='sidebar__orders'>
              <SideNavbar />
            </div>
            <div className="orderList">
              <PastOrders /></div>
          </div>
  </PrivateRoute> */}

        {/* <Route path="*">
          <NoFoundComponent />
        </Route> */}


        <Switch>
          <Route exact path="/register">
            <div className="register__page">
              <Register />
            </div>

          </Route>
          <Route exact path="/orders">
            <div className='sidebar__orders'>
            <SideNavbar />
            </div>
            <div className="orderList">
              <PastOrders /></div>
          </Route>
          <Route exact path="/create">
          <div className='sidebar__create'>
            <SideNavbar />
            </div>
            <div className="createOrder">
              <Create />
            </div>
          </Route>
          <Route exact path="/">
            <div className="signin__page">
              <Signin />
            </div>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
