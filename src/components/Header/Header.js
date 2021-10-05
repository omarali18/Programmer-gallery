import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import img from "../../images/logo/logo.png"
import coverImg from "../../images/hero.png"

const Header = () => {
    return (
        <div className="banner">
            <div className="menu-container">
                <nav className="d-flex justify-content-end menu-color">
                    <Link className="menu" to="/home">Home</Link>
                    <Link className="menu" to="/about">About us</Link>
                    <Link className="menu" to="/services">Services</Link>
                    <Link className="menu" to="/contactUs">Course details</Link>
                </nav>
            </div>
            <div className="banner-container ">
                <div className="text-div d-flex flex-column align-items-center justify-content-center ">
                    <h1>A Platform for Aspiring <span>Programmers</span></h1>
                    <h2>A Place to hone your <span>'Computer Programming Skills'</span></h2>
                    <h3>Monthly Programming Contests, ,<br /> Cook-off and Lunchtime</h3>
                    <button className="btn btn-primary text-white"><a href="#course">Course</a></button>
                </div>
                <div className="img-div">
                    <img height="697" src={coverImg} alt="" />
                </div>
            </div>
            {/* <div className="banner-container ">
                <div className="">
                    <div className="row d-flex banner align-items-center justify-content-center">
                        <div className="header">
                            <div>
                                <img className="logo-img" src={img} alt="" />
                            </div>
                            <nav className="d-flex justify-content-end menu-color">
                                <Link className="menu" to="/home">Home</Link>
                                <Link className="menu" to="/about">About us</Link>
                                <Link className="menu" to="/services">Services</Link>
                                <Link className="menu" to="/contactUs">Course details</Link>
                            </nav>
                        </div>
                        <div className="col-md-6 hesder-container">

                            <div>
                                <h1 className="title">
                                    Welcome to <br /> <span className="welcome">Our Class room</span>
                                </h1>
                            </div>
                            <div>
                                <img src={coverImg} alt="" />
                            </div>


                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Header;