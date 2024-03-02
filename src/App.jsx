import "./p1/styles/reset.css";
import "./p1/styles/variables.css";
import SecretAgentProfileView from "./p1/SecretAgentProfileView"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import StartButtonParagraph from './p1/StartButtonParagraph'; 
import UserInteractionLayout from './p2/UserInteractionLayout';
import P3 from "./P3";
import UploadImage from "./p4";

function App() {
  

  return (
    
     
     <Router>
        <Routes>
          <Route exact path="/"
           element={<SecretAgentProfileView/>} />
        
          <Route exact path="/UserInteractionLayout"
           element={<UserInteractionLayout />} />

           <Route  path="/P3"
            element={<P3/>} />

            <Route path="/UploadImage"
               element={<UploadImage/>}/>
            
          
        </Routes>
    </Router>
      
     //<SecretAgentProfileView></SecretAgentProfileView>
     
    
    
  )
}

export default App
