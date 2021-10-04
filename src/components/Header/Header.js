import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <div className="banner-container ">
            <div className="">
                <div className="row d-flex banner align-items-center justify-content-center">
                    <div className="header">
                        <nav className="d-flex justify-content-end menu-color">
                            <Link to="/home">Home</Link>
                            <Link to="/about">About us</Link>
                            <Link to="/services">Services</Link>
                            <Link to="/contactUs">Course details</Link>
                        </nav>
                    </div>
                    <div className="col-md-6">

                        <h1 className="title">
                            Welcome to <br /> <span className="welcome">Our Class room</span>
                        </h1>


                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </div>
    );
};

export default Header;