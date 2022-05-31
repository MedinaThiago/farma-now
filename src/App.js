import "./App.css";
import Product from './components/Product'
import Header from './components/Header'
import Login from './components/Login'
import { useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
