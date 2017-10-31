import React from 'react';

export default class LoginMain extends React.Component{
    constructor(){
        super();
        this.handleFormSubmit=this.handleFormSubmit.bind(this);
    }
    handleFormSubmit(){
        console.log("user name is "+this.refs.username.value);
        console.log("password is "+this.refs.userpassword.value);

    }
    render(){
        return(
            <div className="row">
                <div className="col-md-offset-6 col-md-2">
                       <form onSubmit={(e)=>{e.preventDefault();this.handleFormSubmit()}}>
                        <input className="form-control" type="text" ref="username"/>
                        <input className="form-control" type="text" ref="userpassword"/>
                        <input className="form-control" type="submit"/>
                       </form>
                </div>
            </div>
        )
    }
}