import React from 'react';
import Capture2 from './images/Capture_002.JPG'
import App from '../App.css'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from 'react-router-dom'
const Directory=()=>{
    return(
        <Router>
        <div>
            <h3>Interview Directory</h3>
            <div className="wrapper_box">
                <div><img className="image" src={Capture2} alt="Box Image" />;</div>
                <div><img className="image" src={Capture2} alt="Box Image" /></div>
                <div><img className="image" src={Capture2} alt="Box Image" /></div>
                <div><img className="image" src={Capture2} alt="Box Image" /></div>
                <div><img className="image" src={Capture2} alt="Box Image" /></div>
                <div><img className="image" src={Capture2} alt="Box Image" /></div>
            </div>
            <Switch>

                
            </Switch>
        </div>
        </Router>
    )
}
export default Directory