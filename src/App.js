import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Resume from './components/Resume';
import Education from './components/Education';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css'; // Make sure this path is correct

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/education">Education</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/workexperience">Work Experience</Link>
                    <Link to="/skills">Skills</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/workexperience" element={<WorkExperience />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;