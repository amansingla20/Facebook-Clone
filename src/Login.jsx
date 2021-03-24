import './Login.css';
import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import {useHistory}  from 'react-router';
function Login() {
    const [username ,setUsername] = useState('');
    const history = useHistory();
    const signIn = (event) =>{
        event.preventDefault();
        history.push({
            pathname: '/dashboard',
            username: username
        })
    }
    localStorage.setItem('userName', username);
    return (
        <div className='Login'>
            <div className="login-logo">
                <img src='https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png' alt=''/>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png' alt=''/>
            </div>
                    <div className='input-fields'>
                    <div className ="form-group">
                    <input 
                    type="text" 
                    className="form-control" 
                    name="username" 
                    placeholder="Username" 
                    required="required"
                    value={username}
                    onChange={(event)=>{setUsername(event.target.value)}}            
                    />
                </div>
                <div className="form-group">
                    <input
                    type="password"
                    className="form-control" 
                    name="password"
                    placeholder="Password" required="required" />
                </div>
                </div>
                    <Button style={{fontSize: '17px'}} type='submit' onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
