import React, { useEffect, useState } from 'react';
import ShowHeaderCart from '../ShowHeaderCart/ShowHeaderCart';
import "./DiscountCourses.css"

const OurServices = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch("https://mocki.io/v1/1ddd7739-fbba-4a3c-9e03-1811e75fdbe2")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    const showFourData = [];
    for (const course of courses) {
        if (showFourData.length < 4) {
            showFourData.push(course)
        }
    }
    return (
        <div className="card-1">
            <div className="card" id="course">
                {
                    showFourData.map(data => <ShowHeaderCart course={data} key={data.courseId} />)
                }
            </div>
            <div className="d-flex justify-content-center align-items-center site-container ps-4">
                <img className="w-100 h-100" src="https://images.unsplash.com/photo-1562813733-b31f71025d54?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFja2Vyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />

            </div>
        </div>
    );
};

export default OurServices;