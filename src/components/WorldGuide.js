import React from 'react';
import App from '../App.css'
const WorldGuide=()=>{
    return(
        <div className="text">
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A nulla atque, dignissimos dolore enim officia autem inventore, laudantium temporibus similique provident natus sint incidunt soluta eos ut, nesciunt excepturi earum.
            </p>
            <div className="mapouter">
            <div class="gmap_canvas">
                <iframe width="800" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                </iframe>
                <a href="https://www.embedgooglemap.net">EXPLORE</a>
                </div>
                {/* <style>.mapouteposition:relative;text-align:right;height:500px;width:600px;.gmap_canvas overflow:hidden;background:none!important;height:500px;width:600px;</style> */}
                </div>
        </div>
    )
}
export default WorldGuide