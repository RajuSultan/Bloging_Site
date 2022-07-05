import React, { useState } from 'react';
import logo from '../../assets/img/logo.png';
import './Navbar.css';


const Navbar = () => {
    const [dropDown, setDropdown] = useState(false);
    return (
        <nav class="main-nav1  ">
            <div><a class="blog-logo1" href="index.html"><img src={logo} alt="Fashion Critiques" /></a></div>
            <ul id="menu1">
                <div className={dropDown ? 'nav-responsive' : 'nav-Link'}>
                    <li class="nav-home nav-current" role="presentation"><a href="index.html">Home</a></li>
                    <li class="nav-article-example" role="presentation"><a href="article.html">Post Example</a></li>
                    <li class="nav-about-us" role="presentation"><a href="about.html">Page Example</a></li>
                    <li class="nav-author-page" role="presentation"><a href="author.html">Author Page</a></li>
                </div>
                <div>
                    <span class="socialheader" id="social">
                        <a href="https://twitter.com/MD_Sultan777"><span class='symbol'>circletwitterbird</span></a>
                        <a href="https://www.facebook.com/rajusultan.raju"><span class='symbol'>circlefacebook</span></a>
                        <a href="https://www.google.com/"><span class='symbol'>circlegoogleplus</span></a>
                        <a href="mailto:wowthemesnet@gmail.com"><span class='symbol'>circleemail</span></a>
                    </span>
                </div>
                <span className='drop-down' onClick={() => setDropdown(!dropDown)}><button>Menu</button></span>
            </ul>
        </nav>
    );
};

export default Navbar;