import React, {Component} from 'react';
import './css/Header.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import imglogo from '../../assets/logo.png';

class Header extends Component{
    render(){
        return(
            
            <div>
                <nav className="navbar navbar-expand-lg">
                    <div className="navbar-brand">
                        <img className="imglogo" src={imglogo} alt=""/>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <nav id="navbarCollapse" className="nav nav-masthead">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to="/supplier" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/supplier/About-Us" className="nav-link">About Us</Link>
                            </li>
                            <li className="nav-item active">

                                {/* <Link to="/supplier/Register" className="nav-link">Register</Link> */}

                                <Link to="/profile" className="nav-link">Profile</Link>

                            </li>
                            
                        </ul>
                    </nav>
                    
                </nav>
            </div>
        )
    }
}
export default Header;