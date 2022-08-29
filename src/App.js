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
import PersonalLR from "./pages/PersonalLR/PersonalLR";
import PersonalLRDirections from "./pages/PersonalLR-Directions/PersonalLR-Directions";
import Bookmark from "./pages/Bookmark/Bookmark";

function App() {
  return (
    <Router>
      <Routes>

        <Route path='/' element={<Login title="eCook 高齡餐廚巧幫手"/>} />
        
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
        <Route path='/LearningRecord/PersonalLR' element={<PersonalLR />} />
        <Route path='/LearningRecord/PersonalLR/PersonalLR-Directions' element={< PersonalLRDirections />} />
        <Route path='/LearningRecord/TeamLR' element={<TeamLR />} />
        <Route path='/LearningRecord/TeamLR/TeamLR-Directions' element={<TeamLRDirections />} />
        
      </Routes>
      <Routes>

        <Route path='/bookmark' element={< Bookmark />} />
        
      </Routes>
    </Router>
  );
}

export default App;
