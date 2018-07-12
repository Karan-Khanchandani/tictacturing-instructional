import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Template from '../containers/Template'
import Profile from '../containers/Profile'
import TicTacToe from '../containers/TicTacToe'

const createRoutes = () =>{
    return (
        <Route
        path='/'
        component={Template}
        >
        <IndexRoute
        component = {TicTacToe} />
        <Route 
        path={'/profile'}
        component={Profile}/>
        </Route>
    )
}

const Routes = createRoutes()

export default Routes