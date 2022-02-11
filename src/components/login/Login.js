import React from 'react';
import './login.css';
import{Link} from 'react-router-dom';


function Login(props) {
    
    
    return (
        <div className='container'>
            <h2 className='text'>Login</h2>
        <form action="/home">
            <div class="input-field">
                <input class="input-field1" type="text" name="username" id="username"
                    placeholder="Enter Your Email"/>
                <div class="underline"></div>
                <br></br>
            </div>
            <div class="input-field">
                <input class="input-field1" type="password" name="password" id="password"
                    placeholder="Enter Your Password"/>
                <div class="underline"></div>
                <br></br>
            </div>

            <input type="submit" value="Submit" />
        </form>
        <footer>
                <p className="foot">First time? <Link className="glass" to="/signup">Create an account</Link>.</p>
               
                
                <p className ="foot"><Link className='glass' to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    );
}

export default Login;