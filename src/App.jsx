import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Facilities from './pages/Facilities';
import Equipment from './pages/Equipment';
import Team from './pages/Team';
import Contact from './pages/Contact';

// New Pages
import Research from './pages/Research';
import Methods from './pages/Methods';
import Mechanisms from './pages/Mechanisms';
import Materials from './pages/Materials';
import Publications from './pages/Publications';
import ProjectsFunded from './pages/ProjectsFunded';
import Teachings from './pages/Teachings';
import Positions from './pages/Positions';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router basename="/riselab">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Primary Navigation Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />

            {/* Research Routes */}
            <Route path="/research" element={<Research />} />
            <Route path="/research/methods" element={<Methods />} />
            <Route path="/research/mechanisms" element={<Mechanisms />} />
            <Route path="/research/materials" element={<Materials />} />

            <Route path="/publications" element={<Publications />} />
            <Route path="/projects-funded" element={<ProjectsFunded />} />
            <Route path="/teachings" element={<Teachings />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/positions" element={<Positions />} />

            {/* Secondary / Footer Routes */}
            <Route path="/about" element={<About />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/equipment" element={<Equipment />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
