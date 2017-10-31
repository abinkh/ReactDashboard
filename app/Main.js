import React from 'react';
import {Switch, Route} from 'react-router-dom';
import DashboardMain from './components/Dashboard/DashboardMain';
import LoginMain from './components/Login/LoginMain';
import FundamentalMain from './components/Fundamental Analysis/FundamentalAnalysisMain';

const Main = () => {
    return(
        <main>
            <Switch>
                <Route exact path="/" component={LoginMain}/>
                <Route exact path="/login" component={LoginMain}/>
                <Route exact path="/dashboard" component={DashboardMain}/>
                <Route exact path="/fundamental" component={FundamentalMain}/>
            </Switch>
        </main>
    )

}
export default Main;

