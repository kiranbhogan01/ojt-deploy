// import {Link} from 'react-router-dom'
// const Header = () => {
//     return(
//          <Header>
//             <div className='clgname'>
//                  <a href="/" data-discover="true">Vivekanand College</a>
//              </div>

//              <nav className='Navbar'>
//                   <a class="nav-item" href="/" data-discover="true">Home</a>
//                   <a class="nav-item" href="/about" data-discover="true">About</a>
//                   <a class="nav-item" href="/courses" data-discover="true">Courses</a>
//                   <a class="nav-item" href="/contact" data-discover="true">Contact</a>
//                   <a class="nav-item btn primary-btn" href="/admission" data-discover="true">Apply Now!</a>
//              </nav>
//                  <button className='humburger-menu'>
//                      <span class="hamburger-icon"></span>
//                      <span class="hamburger-icon"></span>
//                      <span class="hamburger-icon"></span> 
//                      <span class="hamburger-icon"></span>
//                  </button>
//              <nav className='drawer-nav'></nav>

        
//         {/* <Link to='/home'>Home</Link>
//         <Link to ='/about'>About</Link>
//         <Link to ='/courses'>Courses</Link>
//         <Link to ='/contact'>Contact</Link> */}

        
//             </Header>

//     )
    
// }

// export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css';
const Header = () => {
    const [menuOpen, setMenuOpen]= useState(false);

    const toggleMenu = () => {
        setMenuOpen(menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };
    return (
        <div>

         
        <header className="header">
            <div div className="header-container">
                <h1 className="logo">Vivekanand College</h1>

                <nav className="nav">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/courses" className="nav-link">Courses</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                    <Link to="/admission" className="apply-btn">Apply Now!</Link>
                
                 </nav>
                <button className="hamburger" onClick={toggleMenu}>

                </button>
                </div>
            {/* <div>
                <Link to="/" onClick={closeMenu} className="mobile-link">Home</Link>
                <Link to="/about" onClick={closeMenu} className="mobile-link">About</Link>
                <Link to="/courses" onClick={closeMenu} className="mobile-link">Courses</Link>
                <Link to="/contact" onClick={closeMenu} className="mobile-link">Contact</Link>
                <Link to="/admissions" onClick={closeMenu} className="mobile-link">Apply Now!</Link>
                
            </div>
             */}
        </header>
     </div>
  
        
    )
}

export default Header;