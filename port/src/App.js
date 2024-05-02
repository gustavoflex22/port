import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage'; 
import TeamPage from './pages/TeamPage'; 
import ContactPage from './pages/ContactPage'; 
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />  
        <Route path="/team" element={<TeamPage />} />          
        <Route path="/contact" element={<ContactPage />} />    
      </Routes>
    </Router>
  );
}

export default App;