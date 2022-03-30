import React from "react"
import './Home.css'
import { Button } from 'antd';
import Appbar from "../../components/Appbar/Appbar";
function Home() {

    return (
        <>
            <Appbar />
            <div className="body">
                <h1> WECLOME eCook </h1>
                <Button type="primary">Primary</Button>
       
     </div>
       
 </>

    );
}

export default Home