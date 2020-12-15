import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Movies from './pages/Movies';



function App() {
 
  return (
    <div className="container-fluid movie-app">

    <Movies />

    </div>
  );
}

export default App;
