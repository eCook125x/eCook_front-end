import React from "react"
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Link from "./pages/Link/Link";
import Cookbook from "./pages/Cookbook/Cookbook";
import SweetAndSavory from "./pages/SweetAndSavory/SweetAndSavory";
import MealRecipes from "./pages/MealRecipes/MealRecipes";
import LearningRecord from "./pages/LearningRecord/LearningRecord";
import TeamLR from "./pages/TeamLR/TeamLR";
import TeamLRDirections from "./pages/TeamLR-Directions/TeamLR-Directions";
import Complete from "./pages/Complete/Complete";

function App() {
  return (
    <Router>
      <Routes>

        <Route path='/' element={<Login />} />
        
      </Routes>
      <Routes>

        <Route path='/complete' element={<Complete />} />

      </Routes>
      <Routes>

        <Route path='/link' element={<Link />} />
        
      </Routes>
      <Routes>

        <Route path='/about' element={<About />} />
        
      </Routes>
      <Routes>

        <Route path='/cookbook' element={<Cookbook />} />
        <Route path='/cookbook/SweetAndSavory' element={<SweetAndSavory />} />
        <Route path='/cookbook/SweetAndSavory/MealRecipes' element={<MealRecipes />} />
        
      </Routes>
      <Routes>

        <Route path='/LearningRecord' element={<LearningRecord />} />
        <Route path='/LearningRecord/TeamLR' element={<TeamLR />} />
        <Route path='/LearningRecord/TeamLR/TeamLR-Directions' element={<TeamLRDirections />} />
        
      </Routes>
    </Router>
  );
}

export default App;
