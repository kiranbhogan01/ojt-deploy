

import react from "react";
import {  BrowserRouter as  Router, Routes ,Route } from "react-router-dom";
import Home from "./Pages/HomePage";
import About from "./Pages/AboutPage";
import Courses from "./Pages/CoursesPage";
import Contact from "./Pages/ContactPage";
import Admission from "./Pages/AdmissionPage";
import NotFoundPage from "./Pages/NotFoundPage";
import Chatbot from "./components/chatbotcomponent/Chatbot";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";
import { useState } from "react";


const App = () => {
    const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
    return(
      <>
        <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Kiran Raju Bhogan"
          studentPhotoUrl="/Images/My.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
      <div>
          <Router>
             <Routes>
               <Route path="/" element={<Home/>} />
               <Route path="/about" element={<About/>}/>
               <Route path="/courses" element={<Courses/>}/>
               <Route path="/contact" element={<Contact/>}/>
               <Route path="/admission" element={<Admission/>}/>
               <Route path="*" element={<NotFoundPage/>}/>
             </Routes>
                <Chatbot />
                </Router>
          <Chatbot />
      </div>
        </>
        
    )
}

export default App;


//https://ojt-deploy-git-main-kiran-bhogans-projects.vercel.app