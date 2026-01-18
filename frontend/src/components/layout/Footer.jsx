import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-slate-300 pt-16 pb-8 border-t border-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-12">

          {/* SECTION 1: QUICK LINKS */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-700 pb-2 inline-block">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/team" className="hover:text-blue-400 transition-colors">Team</Link></li>
              <li><Link to="/research" className="hover:text-blue-400 transition-colors">Research</Link></li>
              <li><Link to="/publications" className="hover:text-blue-400 transition-colors">Publications</Link></li>
              <li><Link to="/projects-funded" className="hover:text-blue-400 transition-colors">Projects Funded</Link></li>
              <li><Link to="/teachings" className="hover:text-blue-400 transition-colors">Resources</Link></li>
              <li><Link to="/positions" className="hover:text-blue-400 transition-colors">Positions</Link></li>
              <li><Link to="/equipment" className="hover:text-blue-400 transition-colors">Equipment</Link></li>
              <li><Link to="/gallery" className="hover:text-blue-400 transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* SECTION 2: CONTACT */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-700 pb-2 inline-block">Contact</h3>
            <address className="not-italic text-sm leading-relaxed text-gray-400 space-y-4">
              <p>
                B-203, 2nd Floor, Block B,<br />
                Har Gobind Khorana Building (SAB Building)<br />
                Department of Metallurgical and Materials Engineering<br />
                Indian Institute of Technology, Ropar<br />
                Bara Phool, Rupnagar, Punjab, INDIA
              </p>
              <p>
                IIT Ropar, Rupnagar,<br />
                Punjab - 140001, India
              </p>
            </address>
          </div>

        </div>

        {/* BOTTOM LINE */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2026 RISE Lab, IIT Ropar. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
