
import React from 'react';
import "./Motivation.css"
import midImg from "../../images/mid-img.png"

const SignUp = () => {
    return (
        <div className="mid-container w-75 m-auto p-5 mb-4 mt-4">
            <div className="">
                <img src={midImg} alt="" />
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center mid-text-container">
                <h2>I will stay with you until you Success your life.</h2>
                <p className="qsn">Who else do you know who'll do that for you? but we will stay with you.</p>
                <p className="motivation">Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</p>
            </div>

        </div>
    );
};

export default SignUp;