import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import DiscountCourses from '../DiscountCourses/DiscountCourses';
import Motivation from '../Motivation/Motivation';



const Home = () => {
    return (
        <div>
            <Header></Header>
            <Motivation></Motivation>
            <DiscountCourses></DiscountCourses>
            <Footer></Footer>
        </div>
    );
};

export default Home;