import React from 'react';

class DemoLogIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "demouser@demo.com",
            password: "password",
        }
    }

    render(){
        return (
            <button className="session-submit">Demo User</button>
        )
    }
}