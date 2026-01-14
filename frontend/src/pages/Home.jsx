import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Microscope, Shield, Cpu, Database } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative max-w-7xl mx-auto z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            RISE Lab
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 font-light">
            Research in Intelligent Systems & Engineering
          </p>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto mb-10">
            Advancing the frontiers of computer science through cutting-edge research and innovation at IIT Ropar.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              type="button"
              className="px-8 py-3 bg-white text-blue-900 rounded-lg font-semibold text-lg hover:bg-gray-100 transition shadow-lg flex items-center justify-center gap-2"
            >
              Join RISE Lab <ArrowRight size={20} />
            </button>
            <button
              type="button"
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition flex items-center justify-center"
            >
              Request Equipment
            </button>
          </div>
        </div>

        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* About Summary */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Our Research</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            The RISE Lab at IIT Ropar is dedicated to solving complex problems in the domains of Artificial Intelligence,
            IoT, and Systems Engineering. We collaborate with industry leaders and academic partners globally
            to produce high-impact research.
          </p>
          <Link to="/about" className="text-iitrpr-blue font-semibold hover:text-blue-800 hover:underline">
            Learn more about us &rarr;
          </Link>
        </div>
      </section>

      {/* Focus Areas (Cards) */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Research Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FocusCard
              icon={<Cpu size={40} className="text-blue-600" />}
              title="IoT & Embedded Systems"
              description="Designing smart, connected devices and efficient embedded architectures."
            />
            <FocusCard
              icon={<Database size={40} className="text-purple-600" />}
              title="Big Data & Cloud"
              description="Scalable data processing and distributed computing infrastructures."
            />
            <FocusCard
              icon={<Microscope size={40} className="text-emerald-600" />}
              title="AI & Machine Learning"
              description="Advanced algorithms for vision, NLP, and predictive analytics."
            />
            <FocusCard
              icon={<Shield size={40} className="text-red-600" />}
              title="Cybersecurity"
              description="Securing networks and systems against modern digital threats."
            />
          </div>
        </div>
      </section>

      {/* Facilities Highlight */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="bg-gray-200 rounded-xl h-64 w-full flex items-center justify-center text-gray-400">
              {/* Placeholder for an actual lab image later */}
              <span>Lab Image Placeholder</span>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">World-Class Facilities</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our lab is equipped with state-of-the-art high-performance computing clusters,
              sensor testbeds, and advanced prototyping tools to support groundbreaking research.
            </p>
            <Link to="/facilities" className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition">
              Explore Facilities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const FocusCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center">
    <div className="mb-4 p-3 bg-gray-50 rounded-full">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Home;
