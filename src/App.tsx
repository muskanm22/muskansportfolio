import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skill';
import Projects from './components/Project';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MadeByMe from './components/MadeByMe';
import Loader from './components/Loader';  // 👈 new loader import

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fake delay for loader (2 sec) – you can adjust
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader/>; // 👈 show loader first
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/resume" element={<MuskanResume />} /> */}
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/made-by-me" element={<MadeByMe />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
