import React from "react"
import './MealRecipes.css'
import Appbar from "../../components/Appbar/Appbar/Appbar";

import { Button } from 'antd';

function About() {

    return (
        <>
            <Appbar />
          
            <div className="body">
                <h1> WECLOME About bmooo</h1>
                <Button type="primary">Primary</Button>
       
     </div>
       
 </>

    );
}

export default  About