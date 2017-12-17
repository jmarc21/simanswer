import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Shelves from './components/Shelves';
import Bins from './components/Bins';
import Create from './components/Create';
import Detail from './components/Detail';


export default (
    <Switch>
        <Route exact path='/' component={Shelves}/>
        <Route path='/bins/:id' component={Bins}/>
        <Route path='/bin/:id' component={Create}/>
        <Route path='/create/:id' component={Detail}/>
    </Switch>
)

