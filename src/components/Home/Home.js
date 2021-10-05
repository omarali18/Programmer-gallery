import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import DiscountCourses from '../DiscountCourses/DiscountCourses';
import SignUp from '../SignUp/SignUp';



const Home = () => {
    return (
        <div>
            <Header></Header>
            <SignUp></SignUp>
            <DiscountCourses></DiscountCourses>
            <Footer></Footer>
        </div>
    );
};

export default Home;