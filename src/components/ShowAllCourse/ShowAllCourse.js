import React from 'react';

const ShowAllCourse = (props) => {
    const { courseName, img, courseFee } = props.course
    console.log(props);
    return (
        <div className=" border border border-warning rounded-3 ">
            <div>
                <div>
                    <img className="w-100" src={img} alt="" />
                </div>
                <div>
                    <h3>{courseName}</h3>
                    <p>{courseFee}</p>
                </div>
            </div>
        </div>

    );
};

export default ShowAllCourse;