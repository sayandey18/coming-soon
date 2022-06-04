import React from 'react';
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";

const data = [
    {
        facebook: 'https://www.facebook.com/sayan.dey9239/',
        instagram: 'https://www.instagram.com/iam.sayandey/',
        email: 'mailto:mr.sayandey18@gmail.com'
    },
]

function Coming() {
    return (
        <div className="container home__container">
            <div>
                <h1>coming soon<span className="dot">.</span></h1>
                <div className="link__div">
                    <Link to="/about" className="page__link">sayandey.dev</Link>
                </div>

                {
                    data.map(({ facebook, instagram, email }, index) => {
                        return (
                            <div className="icons">
                                <a href={facebook} target="_blank"><FaFacebook /></a>
                                <a href={instagram} target="_blank"><FaInstagram /></a>
                                <a href={email} target="_blank"><FaPaperPlane /></a>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Coming
