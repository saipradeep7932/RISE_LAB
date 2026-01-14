import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">RISE Lab</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Research in Intelligent Systems & Engineering.<br />
              Department of Computer Science & Engineering,<br />
              Indian Institute of Technology Ropar.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/research" className="hover:text-white">Research Areas</a></li>
              <li><a href="/publications" className="hover:text-white">Publications</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Contact</h3>
            <p className="text-gray-400 text-sm">
              J.C. Bose Block,<br />
              IIT Ropar, Rupnagar,<br />
              Punjab - 140001, India
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} RISE Lab, IIT Ropar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
