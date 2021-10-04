import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import "./Services.css"
import ShowAllCourse from '../ShowAllCourse/ShowAllCourse';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Services = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch("https://mocki.io/v1/1ddd7739-fbba-4a3c-9e03-1811e75fdbe2")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    console.log(courses);
    return (
        <div>
            <Header></Header>

            <div className="service-container">
                <h1>Our course</h1>
                <div className="all-course-cart">
                    {
                        courses.map(course => <ShowAllCourse course={course} key={course.courseId} />)
                    }
                </div>

            </div>

            <Footer></Footer>
        </div>
    );
};

export default Services;