import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundImage from './bg.png';
import './landingpage.css'

function Landingpage(props) {
    return (
        <div>
            <header style={ HeaderStyle }>
            <h1 className="main-title">Welcome To Blog App</h1>
            <p className="main-para">join us now and don't waste time</p>
            <div className="buttons">
                <Link to="/login">
                    <button className="primary-button" id ="log_btn"><span>log in</span></button>
                </Link>
                <Link to="/signup">
                    <button className="primary-button" id="log_btn"><span>Sign Up</span></button>
                </Link>
            </div>
        </header>
        </div>
    );
}
const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

export default Landingpage;