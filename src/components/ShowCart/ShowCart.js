import React from 'react';
import "./ShowCart.css"

const ShowCart = (props) => {
    const { courseName, img, courseFee } = props.course
    return (
        <div className=" border border-2 border-warning rounded-3 ">
            <div>
                <div>
                    <img className="w-100 img" src={img} alt="" />
                </div>
                <div>
                    <h4>Discount : <span className="dis">20%</span></h4>
                    <h3>Course name : {courseName}</h3>
                    <p>Course price : ${courseFee}</p>
                </div>
            </div>
        </div>
    );
};

export default ShowCart;