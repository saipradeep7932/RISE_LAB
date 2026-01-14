import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Equipment', path: '/equipment' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-iitrpr-blue text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex flex-col">
              <span className="text-2xl font-bold tracking-wide">RISE LAB</span>
              <span className="text-xs font-light text-gray-300 tracking-wider">IIT ROPAR</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${isActive(link.path)
                  ? 'bg-blue-900 text-white'
                  : 'text-gray-200 hover:bg-blue-800 hover:text-white'
                  }`}
              >
                {link.name}
              </Link>
            ))}

            {/* CTA Button Placeholder - Will act as Join/Request trigger later */}
            <div className="ml-4 flex items-center space-x-2">
              {/* Will add specialty buttons here later */}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-200 hover:text-white hover:bg-blue-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path)
                  ? 'bg-blue-950 text-white'
                  : 'text-gray-300 hover:bg-blue-800 hover:text-white'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
