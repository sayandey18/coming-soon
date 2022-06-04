import React from 'react';
import { Link } from "react-router-dom";

function About() {
    return (
        <div className="container about__container">
            <div>
                <h2 className='dev__domain'>sayandey.dev</h2>
                <p className="registered__date"><strong>Registered on:</strong> 04 June 2022</p>
                <p className="owner__name"><strong>Owner:</strong> Sayan Dey</p>
                <p className='about__domain'>.dev is a top-level domain name operated by Google.
                    It was proposed in ICANN's new generic top-level domain program,
                    and became available to the general public on March 1, 2019,
                    with an early access period that began on February 19.
                </p>
                <div className="link__div">
                    <Link to="/" className="page__link">back to Home</Link>
                </div>
            </div>
        </div>
    )
}

export default About
