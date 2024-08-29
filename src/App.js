import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Chatbox from './components/Chatbox';
import ContactUs from './components/ContactUs';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer'; // Import the Footer component

function App() {
  return (
    <div id="root">
      <Router>
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/register" />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Chatbox />
        <Footer />
      </Router>
    </div>
  );
}

export default App;