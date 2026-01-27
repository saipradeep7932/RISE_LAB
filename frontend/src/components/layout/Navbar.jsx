import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Search, ChevronDown, Linkedin, Instagram, Mail, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { newsItems, motiveText, aboutText } from '../../data/homeData';
import { groupHead, researchStaff, phdStudents, btechStudents, alumni } from '../../data/teamData';
import { researchMechanisms, researchMaterials, researchMethods } from '../../data/researchData';
import { equipmentList } from '../../data/equipmentData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [researchDropdownOpen, setResearchDropdownOpen] = useState(false);



  // ...

  // --- Search Logic ---
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // --- DYNAMIC SEARCH INDEX BUILDER ---
  // Memoize this if performance becomes an issue, but for this size it's fine.
  const buildSearchIndex = () => {
    const index = [];

    // 1. Home Page
    index.push({
      title: 'Home - Motive',
      path: '/',
      content: `${motiveText.heading} ${motiveText.content}`
    });
    index.push({
      title: 'Home - About',
      path: '/',
      content: `${aboutText.heading} ${aboutText.content.join(' ')}`
    });
    index.push({
      title: 'Home - News',
      path: '/',
      content: newsItems.join(' ')
    });

    // 2. Team Page
    // Group Head
    index.push({
      title: `Team - ${groupHead.name}`,
      path: '/team',
      content: `${groupHead.name} ${groupHead.title} ${groupHead.interest} ${groupHead.dept}`
    });
    // Staff & Students (Helper)
    const addPerson = (p) => {
      index.push({
        title: `Team - ${p.name}`,
        path: '/team',
        content: `${p.name} ${p.role || ''} ${p.area || ''} ${p.bio || ''} ${p.batch || ''}`
      });
    };
    researchStaff.forEach(addPerson);
    phdStudents.forEach(addPerson);
    btechStudents.forEach(addPerson);
    alumni.forEach(addPerson);

    // 3. Research Pages
    // Mechanisms
    researchMechanisms.forEach(item => {
      index.push({
        title: `Research - ${item.title}`,
        path: '/research/mechanisms',
        content: `${item.title} ${item.content}`
      });
    });
    // Materials
    researchMaterials.forEach(item => {
      index.push({
        title: `Research - ${item.title}`,
        path: '/research/materials-path',
        content: `${item.title} ${item.content}`
      });
    });
    // Methods
    researchMethods.forEach(item => {
      index.push({
        title: `Research - ${item.title}`,
        path: '/research/methods',
        content: `${item.title} ${item.content}`
      });
    });

    // 4. Equipment Page
    equipmentList.forEach(item => {
      index.push({
        title: `Equipment - ${item.name}`,
        path: '/equipment',
        content: `${item.name} ${item.category} ${item.description || ''}`
      });
    });

    // 5. Static Pages (Content not yet extracted to data files, but essential for navigation)
    const staticPages = [
      { title: 'Publications', path: '/publications', content: 'Journal Papers, Conference Proceedings, Patents' },
      { title: 'Projects Funded', path: '/projects-funded', content: 'Sponsored Research, Consultancy, Grants' },
      { title: 'Resources', path: '/teachings', content: 'Course Materials, Lectures' },
      { title: 'Positions', path: '/positions', content: 'Join Us, PhD Openings, JRF, Internships' },
      { title: 'Facilities', path: '/facilities', content: 'Infrastructure, Labs' },
      { title: 'Gallery', path: '/gallery', content: 'Photos, Events' },
      { title: 'Contact Us', path: '/contact', content: 'Address, Email, Phone, Location' },
    ];
    staticPages.forEach(p => index.push(p));

    return index;
  };

  const siteContentIndex = buildSearchIndex();

  const filteredResults = siteContentIndex.filter(item => {
    if (!searchQuery) return false;
    const query = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(query) ||
      item.content.toLowerCase().includes(query)
    );
  });

  const handleSearchNavigate = (path) => {
    navigate(path);
    setIsSearchFocused(false);
    setSearchQuery('');
  };

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
        { name: 'Materials', path: '/research/materials-path' },
      ]
    },
    { name: 'Publications', path: '/publications' },
    { name: 'Projects Funded', path: '/projects-funded' },
    { name: 'Resources', path: '/teachings' }, // Renamed
    { name: 'Positions', path: '/positions' },
    { name: 'Equipment', path: '/equipment' }, // Added
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  const getLogo = () => {
    // Attempt dynamic load or fallback
    return new URL('../../assets/header/logo.png', import.meta.url).href;
  };

  return (
    <>
      {/* =========================================================================
          PART 1: TOP HEADER (New)
      ========================================================================= */}
      {/* =========================================================================
           PART 1: TOP HEADER (New)
       ========================================================================= */}
      <div className="bg-rise-deep border-b border-rise-ocean py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-12">

          {/* LEFT: Logo */}
          <div className="flex items-center">
            <img
              src={getLogo()}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/150x50?text=LOGO"; // Fallback
              }}
              alt="Institute Logo"
              className="h-10 w-auto object-contain mr-4 bg-white/10 rounded"
            />
          </div>

          {/* RIGHT: Socials, Email, Search */}
          <div className="flex items-center gap-6">
            {/* Social Icons (Placeholders) */}
            <div className="flex items-center gap-3 text-rise-surf">
              <a href="#" className="hover:text-rise-frost transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="hover:text-rise-frost transition-colors"><Instagram size={18} /></a>
              <a href="#" className="hover:text-rise-frost transition-colors"><Globe size={18} /></a>
            </div>

            {/* Email Button */}
            <a href="mailto:lava@iitrpr.ac.in" className="flex items-center gap-2 bg-rise-ocean text-rise-mist px-3 py-1.5 rounded-full text-xs font-bold hover:bg-rise-surf hover:text-rise-deep transition-colors">
              <Mail size={14} /> Email Us
            </a>

            {/* Search Bar */}
            <div className="relative">
              <div className="flex items-center bg-rise-deep border border-rise-ocean rounded-full px-3 py-1 focus-within:ring-2 focus-within:ring-rise-surf focus-within:border-transparent w-64">
                <input
                  type="text"
                  placeholder="Search site..."
                  className="bg-transparent border-none outline-none text-sm w-full text-rise-mist placeholder-rise-mist/50 placeholder:text-xs"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)} // Delay for click handling
                />
                <button className="text-rise-surf hover:text-rise-frost">
                  <Search size={16} />
                </button>
              </div>

              {/* Search Dropdown Results */}
              <AnimatePresence>
                {isSearchFocused && searchQuery && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-2 w-72 bg-rise-frost rounded-lg shadow-xl border border-rise-ocean py-2 z-50 max-h-64 overflow-y-auto"
                  >
                    {filteredResults.length > 0 ? (
                      filteredResults.map((result, idx) => (
                        <div
                          key={idx}
                          className="px-4 py-2 hover:bg-rise-ocean hover:text-rise-mist cursor-pointer text-sm text-rise-deep flex flex-col"
                          onMouseDown={() => handleSearchNavigate(result.path)} // Changed to onMouseDown to fire before blur
                        >
                          <span className="font-medium">{result.title}</span>
                          <span className="text-xs text-rise-deep/70 group-hover:text-rise-mist/70">{result.path}</span>
                        </div>
                      ))
                    ) : (
                      <div className="px-4 py-2 text-sm text-rise-deep/50 text-center">No results found</div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          PART 2: MAIN NAVIGATION (Existing, updated routes)
      ========================================================================= */}
      <nav className="bg-rise-deep text-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* Logo/Title */}
            <div className="flex items-center flex-shrink-0">
              <Link to="/" className="flex flex-col group">
                <span className="text-2xl font-bold tracking-wide group-hover:text-rise-surf transition-colors">RISE LAB</span>
                <span className="text-xs font-light text-rise-frost tracking-wider">IIT ROPAR</span>
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
                      ? 'text-rise-surf font-bold bg-white/5'
                      : 'text-gray-100 hover:text-rise-surf hover:bg-white/5'
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
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-rise-mist hover:text-rise-deep"
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button - Also includes Search Toggle for Mobile */}
            <div className="xl:hidden flex items-center space-x-4">
              {/* Mobile Search is complicated with double headers, keeping it simple inside menu or separate toggle if needed. 
                   For now, removing the pure search toggle as desktop has it in top bar. 
                   Mobile users might need access to it. Adding a simple search link in mobile menu is easier.
               */}
              <button
                type="button"
                aria-label="Toggle menu"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-200 hover:text-rise-surf hover:bg-white/10 focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="xl:hidden bg-rise-deep border-t border-rise-surf">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {/* Mobile Search Input */}
              <div className="px-3 pb-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-3 py-2 rounded bg-rise-ocean text-rise-mist placeholder-rise-mist/50 text-sm border-none focus:ring-1 focus:ring-rise-surf"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <div className="bg-rise-frost mt-1 rounded shadow-lg max-h-40 overflow-y-auto">
                    {filteredResults.map((result, idx) => (
                      <div
                        key={idx}
                        className="px-3 py-2 text-sm text-rise-deep border-b border-rise-ocean last:border-0"
                        onClick={() => { handleSearchNavigate(result.path); setIsOpen(false); }}
                      >
                        {result.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {links.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => !link.dropdown && setIsOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path)
                      ? 'bg-rise-ocean text-white'
                      : 'text-rise-mist hover:bg-rise-ocean hover:text-white'
                      }`}
                  >
                    {link.name}
                  </Link>
                  {/* Mobile Dropdown */}
                  {link.dropdown && (
                    <div className="pl-6 space-y-1">
                      {link.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          to={dropItem.path}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-2 rounded-md text-sm font-medium text-rise-surf hover:text-white hover:bg-rise-ocean"
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
    </>
  );
};

export default Navbar;
