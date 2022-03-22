import './App.css';
import Footer from './components/footer'
import Header from "./components/Header"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState } from "react"
import PastOrders from "./routes/Past Orders page/PastOrders"
import Create from "./routes/Create"
import Register from "./routes/Register"
import Signin from "./routes/Signin"

function App() {


  return (
    <Router>
      <div className="App">
        <div className="header">
          <Header />
        </div>

        <div className="footer">
          <Footer />
        </div>


        <Switch>
          <Route exact path="/">
            <div className="register__page">
              <Register />
            </div>

          </Route>
          <Route exact path="/orders">
            <div className="orderList">
              {/* <Sidebar/> */}
              <PastOrders /></div>
          </Route>
          <Route exact path="/create">
            <div className="createOrder">
              <Create/>
            </div>
          </Route>
          <Route exact path="/signin">
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
