import React from 'react';
import TheTalks from './TheTalks'
import InterviewDirectory from './InterviewDirectory'
import WorldGuide from './WorldGuide'
import App from '../App.css'

import { BrowserRouter as Router,
Switch,
Link,
Route
} from "react-router-dom"

class NavigationBar extends React.Component{
    render(){
        return(
            <Router>
                <div className="nav_div">
                
                        <ul className = "nav_ul">
                        <li><Link to = '/thetalks'>The Talks</Link></li>
                        <li><Link to = '/interviewDirectory'>Interview Directory</Link></li>
                        <li><Link to = '/worldguide'>World Guide</Link></li>
                        </ul>
                  
                    <Switch>
                        <Route path = '/thetalks' component={TheTalks}/>
                        <Route path ='/interviewDirectory' component={InterviewDirectory}/>
                        <Route path ='/worldguide' component={WorldGuide}/>
                    </Switch>
                </div>
            </Router>
        )
    }

}
export default NavigationBar