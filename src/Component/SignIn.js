import React from 'react';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            npassword:'',
            cpassword:'',
            fav:[]
        }
    }
    signIn=()=>{
        var keys=Object.keys(localStorage);
        if(keys.includes(this.state.email))
            alert("Email Already Used");
        else{
            localStorage.setItem(this.state.email,JSON.stringify(this.state));
            alert("Signed In");
            document.getElementById("logIn").style.display="none";
            document.getElementById("signIn").style.display="none";
            document.getElementById("logOut").style.display="block";
            document.getElementById("userMail").style.display="block";
            document.getElementById("userMail").innerHTML=this.state.email;
            this.setState({
                email:'',
                npassword:'',
                cpassword:'',
            });
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        return (
            <div>
                    <p><input 
                        type="text"
                        placeholder="Email-Id"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        /></p>
                    <p><input 
                        type="password"
                        placeholder="New-Password"
                        name="npassword"
                        value={this.state.npassword}
                        onChange={this.handleChange}
                        /></p>
                    <p><input 
                        placeholder="Confirm-Password"
                        type="password"
                        name="cpassword"
                        value={this.state.cpassword}
                        onChange={this.handleChange}
                        /></p>
                    <button onClick={this.signIn}>Sign In</button>
            </div>
        );
    }
}
export default SignIn;