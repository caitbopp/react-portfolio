import React from 'react';
import headshot from '../../assets/headshot.jpg';

export default function AboutMe() {
    return (
        <div>
            <h1>About Me</h1>
            <div className="about-me-container mb-5">
                <div className="row">
                    <div className="span4">
                        <img className="pull-left" id="headshot" src={headshot} />
                        <p>Hello! My name's Caitlin and I'm an aspiring web developer. I've worked in Marketing for the last 7 years,
                            and while I've learned a lot and had fun, I'm looking to change my career to developing. I'm very
                            detailed-oriented, organized, and I love problem-solving! If you like any of the work you see in my porfolio, please
                            reach out - I'd love the opportunity to connect!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}