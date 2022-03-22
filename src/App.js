import './App.css';
import Footer from './components/footer'
import Header from "./components/Header"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React , { useState } from "react"

function App() {

  
  return (
    <div className="App">
      <Header></Header>
      <Footer></Footer>

    </div>
  );
}

export default App;
