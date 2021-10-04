import React, { useEffect, useState } from 'react';
import ShowCart from '../ShowCart/ShowCart';
import "./OurServices.css"

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
            <div className="card">
                {
                    showFourData.map(data => <ShowCart course={data} key={data.courseId} />)
                }
            </div>
            <div className="d-flex justify-content-center align-items-center site-container">
                <h1>Our discount courses</h1>
            </div>
        </div>
    );
};

export default OurServices;