import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {Hello} from './components/Hello/hello';

const Main = () => {
    return(
        <main>
            <Switch>
                <Route exact path="/" component={Hello}/>
            </Switch>
        </main>
    )

}
export default Main;

