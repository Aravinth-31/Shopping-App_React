import React from 'react';

class LogIn extends React.Component{
    constructor(props){
        super(props);    
        this.state={
            email:'',
            password:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    logIn=()=>{
        var keys=Object.keys(localStorage);
        if(keys.includes(this.state.email)){
            var obj=JSON.parse(localStorage.getItem(this.state.email));
            if(obj.npassword === this.state.password){
                document.getElementById("logIn").style.display="none";
                document.getElementById("signIn").style.display="none";
                document.getElementById("logOut").style.display="block";
                document.getElementById("userMail").style.display="block";
                document.getElementById("userMail").innerHTML=this.state.email;
                document.getElementById("cart").style.display='block';
                document.getElementById("favourite").style.display='block';
                this.setState({email:'',password:''});
            }
            else  
                alert("Invalid Password");
        }
        else
            alert("Invalid E-Mail");
    }
    render(){
        return(
            <div>
                    <h3>Log In</h3>
                    <p><input
                        name="email"
                        type='text'
                        placeholder="E-mail"
                        value={this.state.email}
                        onChange={this.handleChange}
                    /></p>
                    <p><input
                        name="password"
                        type='password'
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    /></p>
                    <button onClick={this.logIn}>Log In</button>
            </div>
        );
    }
}
export default LogIn;