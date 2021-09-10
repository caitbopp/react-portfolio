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
                        <p>Hello! My name's Caitlin and I'm a web developer from Baltimore, Maryland. I recently completed a full stack web development bootcamp and am currently pursuing a career as a front-end developer. I'm very
                            detailed-oriented, organized, and I love problem-solving! If you like any of the work you see in my porfolio, please
                            reach out - I'd love the opportunity to connect!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}