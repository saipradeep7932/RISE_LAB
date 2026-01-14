import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const [researchDropdownOpen, setResearchDropdownOpen] = useState(false);

  // --- Navigation Data ---
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Team', path: '/team' },
    {
      name: 'Research',
      path: '/research',
      dropdown: [
        { name: 'Methods', path: '/research/methods' },
        { name: 'Mechanisms', path: '/research/mechanisms' },
        { name: 'Materials Path', path: '/research/materials-path' },
      ]
    },
    { name: 'Publications', path: '/publications' },
    { name: 'Projects Funded', path: '/projects-funded' },
    { name: 'Teachings', path: '/teachings' },
    { name: 'Positions', path: '/positions' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  // --- Search Logic ---
  const searchableContent = [
    { title: 'Home', path: '/' },
    { title: 'About Us', path: '/about' },
    { title: 'Research - Methods', path: '/research/methods' },
    { title: 'Research - Mechanisms', path: '/research/mechanisms' },
    { title: 'Research - Materials Path', path: '/research/materials-path' },
    { title: 'Publications', path: '/publications' },
    { title: 'Projects Funded', path: '/projects-funded' },
    { title: 'Teachings', path: '/teachings' },
    { title: 'Team', path: '/team' },
    { title: 'Positions', path: '/positions' },
    { title: 'Gallery', path: '/gallery' },
    { title: 'Facilities', path: '/facilities' },
    { title: 'Equipment', path: '/equipment' },
    { title: 'Contact', path: '/contact' },
  ];

  const filteredResults = searchableContent.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchNavigate = (path) => {
    navigate(path);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <nav className="bg-iitrpr-blue text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <Link to="/" className="flex flex-col">
                <span className="text-2xl font-bold tracking-wide">RISE LAB</span>
                <span className="text-xs font-light text-gray-300 tracking-wider">IIT ROPAR</span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden xl:flex items-center space-x-1">
              {links.map((link) => (
                <div
                  key={link.name}
                  className="relative group h-full flex items-center"
                  onMouseEnter={() => link.dropdown && setResearchDropdownOpen(true)}
                  onMouseLeave={() => link.dropdown && setResearchDropdownOpen(false)}
                >
                  <Link
                    to={link.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center ${isActive(link.path)
                      ? 'bg-blue-900 text-white'
                      : 'text-gray-200 hover:bg-blue-800 hover:text-white'
                      }`}
                  >
                    {link.name}
                    {link.dropdown && <ChevronDown size={14} className="ml-1 mt-0.5" />}
                  </Link>

                  {/* Dropdown Menu */}
                  {link.dropdown && (
                    <div
                      className={`absolute top-full left-0 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 transition-all duration-200 transform origin-top-left ${researchDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}
                    >
                      {link.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          to={dropItem.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Search Icon */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 ml-2 rounded-full hover:bg-blue-800 text-gray-200 hover:text-white transition-colors"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="xl:hidden flex items-center space-x-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-full hover:bg-blue-800 text-gray-200 hover:text-white transition-colors"
                aria-label="Search"
              >
                <Search size={22} />
              </button>

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
          <div className="xl:hidden bg-blue-900 border-t border-blue-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {links.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => !link.dropdown && setIsOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path)
                      ? 'bg-blue-950 text-white'
                      : 'text-gray-300 hover:bg-blue-800 hover:text-white'
                      }`}
                  >
                    {link.name}
                  </Link>
                  {/* Mobile Dropdown Sub-links */}
                  {link.dropdown && (
                    <div className="pl-6 space-y-1">
                      {link.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          to={dropItem.path}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-2 rounded-md text-sm font-medium text-blue-200 hover:text-white hover:bg-blue-800"
                        >
                          - {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* --- Global Search Modal --- */}
      <AnimatePresence>
        {isSearchOpen && (
          <div className="fixed inset-0 z-[100] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" onClick={() => setIsSearchOpen(false)}></div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full"
              >
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="flex items-center border-b-2 border-blue-500 pb-2 mb-4">
                    <Search className="text-blue-500 mr-2" />
                    <input
                      type="text"
                      autoFocus
                      placeholder="Search pages, topics..."
                      className="w-full text-lg outline-none text-gray-700"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button onClick={() => setIsSearchOpen(false)} className="text-gray-400 hover:text-gray-600">
                      <X size={20} />
                    </button>
                  </div>

                  <div className="mt-2 max-h-60 overflow-y-auto">
                    {searchQuery.trim() === '' ? (
                      <p className="text-gray-400 text-sm text-center py-4">Start typing to search...</p>
                    ) : filteredResults.length > 0 ? (
                      <ul className="divide-y divide-gray-100">
                        {filteredResults.map((result, idx) => (
                          <li
                            key={idx}
                            onClick={() => handleSearchNavigate(result.path)}
                            className="py-2 px-2 hover:bg-blue-50 cursor-pointer rounded transition-colors text-gray-700"
                          >
                            {result.title}
                            <span className="block text-xs text-gray-400">{result.path}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-500 text-sm text-center py-4">No results found.</p>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
