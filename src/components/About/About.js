import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './About.css'

const About = () => {
    return (
        <div>
            <Header></Header>
            <h2 className="about-text">See About our Programmers success details!!!  <i class="fas fa-meh-rolling-eyes text-danger"></i> <i class="fas fa-meh-rolling-eyes text-danger"></i></h2>
            <Footer></Footer>
        </div>
    );
};

export default About;