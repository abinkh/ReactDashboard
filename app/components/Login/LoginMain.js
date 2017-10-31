import React from 'react';

export default class LoginMain extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-offset-4 col-md-2">
                    <img style={{height:"500",width:"500"}} src={require("../../resources/images/login.png")}/>
                </div>
            </div>
        )
    }
}