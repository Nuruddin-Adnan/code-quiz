import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../logo.png';
import './header.css'

const Header = () => {
    return (
        <header className='header'>
            <nav className="navbar navbar-expand-lg bg-light shadow-sm">
                <div className="container">
                    <Link to='/' className="navbar-brand" >
                        <img src={logo} alt="" />
                        Code Quiz
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <NavLink to='/topics' className="nav-link px-md-4" aria-current="page" >Topics</NavLink>
                            <NavLink to='/statistics' className="nav-link px-md-4" >Statistics</NavLink>
                            <NavLink to='/blog' className="nav-link px-md-4" >Blog</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;