import React from 'react';
import "./ShowHeaderCart.css"

const ShowCart = (props) => {
    const { courseName, img, courseFee } = props.course
    return (
        <div className=" border border-2 border-info cart-hover ">
            <div>
                <div>
                    <img className="w-100 img" src={img} alt="" />
                </div>
                <div>
                    <h4>Discount : <span className="dis text-danger">20%</span></h4>
                    <h3>Course name : {courseName}</h3>
                    <p>Course price : ${courseFee}</p>
                    <button className="enroll-btn btn btn-primary">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default ShowCart;