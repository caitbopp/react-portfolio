import React from 'react';
import headshot from '../assets/headshot.jpg';

function NavBar() {
    return (<header>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <img id="headshot" src={headshot} />
                <h1 className="navbar-brand">Caitlin Bopp</h1>
                <div className="collapse navbar-collapse  d-flex flex-sm-row flex-lg-row-reverse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#about-me">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#work">Work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact-me">Contact Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="assets/Resume_CaitlinBopp.pdf">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>)
};

export default NavBar;