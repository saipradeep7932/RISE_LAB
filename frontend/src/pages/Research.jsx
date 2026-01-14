import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Settings, Layers } from 'lucide-react';

const Research = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl text-center space-y-12">

        {/* Quote Block */}
        <div className="space-y-6">
          <p className="text-3xl md:text-5xl font-serif text-blue-900 leading-tight italic">
            "A bad process with a good outcome is luck. <br className="hidden md:block" />
            A good process with a bad outcome might be a smart experiment."
          </p>
          <p className="text-xl md:text-2xl text-gray-600 font-medium">
            — Adam M. Grant
          </p>
        </div>

        <div className="w-24 h-1 bg-blue-300 mx-auto rounded-full"></div>

        {/* Navigation Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          <Link to="/research/methods" className="group">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1">
              <BookOpen size={48} className="mx-auto text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-700">Methods</h3>
            </div>
          </Link>

          <Link to="/research/mechanisms" className="group">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1">
              <Settings size={48} className="mx-auto text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-700">Mechanisms</h3>
            </div>
          </Link>

          <Link to="/research/materials-path" className="group">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1">
              <Layers size={48} className="mx-auto text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-700">Materials Path</h3>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Research;
