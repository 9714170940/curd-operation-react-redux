import React from 'react'
import App from '../App'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Filter from '../presentation/Filter'

const Routing = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/users" component={Filter}/>
            </Switch>
        </Router>
    )
}

export default Routing
