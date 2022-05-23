import React from "react"
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import Login from "./pages/Login/login";

function App() {
  return (
    <Router>
      <Routes>

        <Route path='/' element={<Home />} />
        
      </Routes>
      <Routes>

        <Route path='/login' element={<Login />} />
        
      </Routes>
      <Routes>

        <Route path='/about' element={<About />} />
        
      </Routes>
    </Router>
  );
}

export default App;
