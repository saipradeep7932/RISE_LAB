import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Settings, Layers } from 'lucide-react';

// Import Illustrations
import methodsIllu from '../assets/research/methods-illustration.png';
import mechanismsIllu from '../assets/research/mechanisms-illustration.png';
import materialsIllu from '../assets/research/materials-path-illustration.png';

const Research = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-6xl text-center space-y-12">

        {/* Quote Block */}
        <div className="space-y-6">
          <p className="text-xl md:text-3xl font-serif text-rise-deep leading-tight italic">
            "A bad process with a good outcome is luck. <br className="hidden md:block" />
            A good process with a bad outcome might be a smart experiment."
          </p>
          <p className="text-xl md:text-2xl text-gray-600 font-medium">
            — Adam M. Grant
          </p>
        </div>

        <div className="w-24 h-1 bg-rise-ocean mx-auto rounded-full"></div>

        {/* Navigation Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 px-4">
          <Link to="/research/methods" className="group">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:border-rise-ocean transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col items-center text-center">
              <div className="w-48 h-48 mb-6 flex items-center justify-center">
                <img
                  src={methodsIllu}
                  alt="Methods"
                  className="w-full h-full object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 group-hover:text-rise-ocean mt-auto">Methods</h3>
            </div>
          </Link>

          <Link to="/research/mechanisms" className="group">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:border-rise-ocean transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col items-center text-center">
              <div className="w-48 h-48 mb-6 flex items-center justify-center">
                <img
                  src={mechanismsIllu}
                  alt="Mechanisms"
                  className="w-full h-full object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 group-hover:text-rise-ocean mt-auto">Mechanisms</h3>
            </div>
          </Link>

          <Link to="/research/materials-path" className="group">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:border-rise-ocean transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col items-center text-center">
              <div className="w-48 h-48 mb-6 flex items-center justify-center">
                <img
                  src={materialsIllu}
                  alt="Materials Path"
                  className="w-full h-full object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 group-hover:text-rise-ocean mt-auto">Materials Path</h3>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Research;
