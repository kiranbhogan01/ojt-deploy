import React from "react";
import Header from "../components/headers/Header";
import { Link } from "react-router-dom";
import './HomePage.css';
import Footer from "../components/footers/Footer";

const Home =() => {
        return(
            <div className="all" style={{ overflow: "auto" }}>
                <Header/>

                <div className="home" id="scroller">
                        
                    <div className="aa">
                        <h1>Welcome to Vivekanand College!</h1>
                        <h2>Your journey to excellence starts here.</h2>
                        <Link to="/admission" className="button" >Apply Now</Link> 
                    </div>
            <div className="Page">
                <p>
                    **Vivekanand College is a premier educational institution dedicated to fostering academic 
                    excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], 
                    we have proudly served generations of students, empowering them to achieve their full potential.
                </p>
                <p>
                    At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. 
                    Our state-of-the-art facilities, experienced faculty, and diverse student community create a 
                    unique ecosystem where curiosity thrives and future leaders are shaped
                </p>
                <h2>
                    Why Choose Vivekanand College?
                </h2>
                <ul className="line">
                     <li><b>Legacy of Excellence:</b>
                         Decades of commitment to quality education.</li>
                    <li><b>Experienced Faculty:</b>
                     Learn from renowned experts and passionate educators.</li>
                    <li><b>Modern Facilities:</b>
                     Well-equipped labs, expansive library, and comfortable campus.</li>
                    <li><b>Holistic Development:</b>
                     Focus on co-curricular activities, sports, and community service.</li>
                    <li><b>Strong Placements:</b>
                     Excellent career opportunities with leading companies.</li>
                </ul>
                <h2>
                    Campus Life & Facilities
                </h2>
                <img src="/Images/campus-life-Crkero7B.jpg"></img>
                <img src="/Images/students-studying-DbLGuwF_.jpeg"></img>

                <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your 
                    learning experience and personal growth.
                </p>
            </div>
                <h3>Ready to explore our courses?</h3>
                 <div>
                        <Link to="/courses" className='button'>Explore Courses</Link>
                 </div>
           
             </div>
    
                <Footer/>
           
            </div>
        )
}

export default Home;