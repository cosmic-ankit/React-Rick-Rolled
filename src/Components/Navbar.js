// Navbar.js
import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black"> 
            <div className="container">
                <a className="navbar-brand " href="/">YouTube Player</a>

                <div className="collapse navbar-collapse px-3" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
