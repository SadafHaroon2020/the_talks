import React, { Component } from 'react';
import { BrowserRouter as router,
Switch,
Link,
Route
} from "react-router-dom"

class NavigationBar extends Component.React{
    render(){
        return(
            <Router>
                <div>
                    <nav>
                        <ul>
                        <li><Link to = '/thetalks'>The Talks</Link></li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path = '/thetalks' component={TheTalks}/>
                    </Switch>
                </div>
            </Router>
        )
    }

}
export default NavigationBar