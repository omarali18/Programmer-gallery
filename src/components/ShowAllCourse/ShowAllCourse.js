import React from 'react';
import "./ShowAllCourse.css"

const ShowAllCourse = (props) => {
    const { courseName, img, courseFee } = props.course
    console.log(props);
    return (
        <div className="card-design ">
            <div>
                <div>
                    <img className="w-100 card-img" src={img} alt="" />
                </div>
                <div>
                    <h3>Course name : {courseName}</h3>
                    <p>Course price : ${courseFee}</p>
                    <button className="enroll-btn btn btn-primary">Enroll Now</button>
                </div>
            </div>
        </div>

    );
};

export default ShowAllCourse;