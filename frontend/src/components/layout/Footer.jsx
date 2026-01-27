import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-rise-deep text-rise-mist pt-16 pb-8 border-t border-rise-ocean font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-12">

          {/* SECTION 1: QUICK LINKS */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 border-b border-white/20 pb-2 inline-block">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-rise-mist/80">
              <li><Link to="/" className="hover:text-rise-surf transition-colors">Home</Link></li>
              <li><Link to="/team" className="hover:text-rise-surf transition-colors">Team</Link></li>
              <li><Link to="/research" className="hover:text-rise-surf transition-colors">Research</Link></li>
              <li><Link to="/publications" className="hover:text-rise-surf transition-colors">Publications</Link></li>
              <li><Link to="/projects-funded" className="hover:text-rise-surf transition-colors">Projects Funded</Link></li>
              <li><Link to="/teachings" className="hover:text-rise-surf transition-colors">Resources</Link></li>
              <li><Link to="/positions" className="hover:text-rise-surf transition-colors">Positions</Link></li>
              <li><Link to="/equipment" className="hover:text-rise-surf transition-colors">Equipment</Link></li>
              <li><Link to="/gallery" className="hover:text-rise-surf transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-rise-surf transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* SECTION 2: CONTACT */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 border-b border-white/20 pb-2 inline-block">Contact</h3>
            <address className="not-italic text-sm leading-relaxed text-rise-mist/80 space-y-4">
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
        <div className="border-t border-white/10 pt-8 text-center text-sm text-rise-mist/50">
          <p>&copy; 2026 RISE Lab, IIT Ropar. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
