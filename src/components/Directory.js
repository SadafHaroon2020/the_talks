import React from 'react';
import Capture2 from './images/Capture_002.JPG'

import image1 from './images/image_box1.jpg'
import image2 from './images/image_box2.jpg'
import image3 from './images/image_box3.jpg'
import image4 from './images/image_box4.jpg'
import image5 from './images/image_box5.jpg'
import image6 from './images/image_box6.jpg'
import image7 from './images/image_box7.jpg'
import image8 from './images/image_box8.jpeg'

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
                <div><img className="grid_image box1" src={image1} alt="Box Image"/><a className="links_box"href="https://the-talks.com/">ARCHITECTURE</a></div>
                <div><img className="grid_image " src={image2} alt="Box Image" /><a className="links_box"href="https://the-talks.com/">ART</a></div>
                <div><img className="grid_image" src={image3} alt="Box Image" /><a className="links_box"href="https://the-talks.com/">FASHION</a></div>
                <div><img className="grid_image" src={image4} alt="Box Image" /><a className="links_box"href="https://the-talks.com/">FILM</a></div>
                <div><img className="grid_image" src={image5} alt="Box Image" /><a className="links_box"href="https://the-talks.com/">FOOD</a></div>
                <div><img className="grid_image" src={image6} alt="Box Image" /><a className="links_box"href="https://the-talks.com/">LIERATURE</a></div>
                <div><img className="grid_image" src={image7} alt="Box Image" /><a className="links_box"href="https://the-talks.com/">SPORTS</a></div>
                <div><img className="grid_image" src={image8} alt="Box Image" /><a className="links_box"href="https://the-talks.com/">MUSIC</a></div>
            </div>
            <Switch>

                
            </Switch>
        </div>
        </Router>
    )
}
export default Directory