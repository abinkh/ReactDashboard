import React from 'react';

export default class DashboardMain extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="row">
                <div className="col-md-2 col-md-3">
                    Dashboard main here
                </div>
                <div className="col-md-2 col-md-3">
                    Dashboard
                </div>
            </div>
        )
    }
}