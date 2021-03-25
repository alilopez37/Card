import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Home'
import Welcome from './Welcome'

class Layaout extends React.Component {

    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Home}></Route>
                        <Route excat path='/prueba' component={Welcome}></Route>
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        )
    }
}

export default Layaout