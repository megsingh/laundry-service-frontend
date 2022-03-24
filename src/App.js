import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useEffect, useState } from "react"
import PastOrders from "./routes/Past Orders page/PastOrders"
import Create from "./routes/Create"
import Register from "./routes/Register"
import Signin from "./routes/Signin"
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import NoFoundComponent from './routes/NoFoundComponent';

function App() {
  
  return (
    <Router>
      <div className="App">

        <Route exact path="/">
          <Signin />

        </Route>
        <Route exact path="/register">
          <Register />
        </Route>

        <PrivateRoute exact path="/create">
          <Create />
        </PrivateRoute>

        <PrivateRoute exact path="/orders">
          <PastOrders />
        </PrivateRoute>

        {/* <Route path="*">
          <NoFoundComponent />
        </div>
        </Route> */}


        {/* <Switch>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/orders">
            <PastOrders />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route exact path="/">
            <Signin />
          </Route>
        </Switch> */}

      </div>
    </Router>
  );
}

export default App;
