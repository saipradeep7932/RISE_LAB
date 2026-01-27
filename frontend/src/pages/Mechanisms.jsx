import React from 'react';
import tripTwipImg from '../assets/mechanisms/trip_twip.jpg';
import misfitImg from '../assets/mechanisms/misfit_volume.jpg';

import { researchMechanisms } from '../data/researchData';

const Mechanisms = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Header */}
        <div className="border-b border-gray-200 pb-4">
          <h1 className="text-4xl font-bold text-blue-900 tracking-tight">Mechanisms</h1>
        </div>

        {/* ITEM 1: SPECIAL LAYOUT (Text full width, Image full width below) */}
        <section className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden p-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">{researchMechanisms[0].title}</h2>
          <p className="text-gray-700 leading-relaxed text-lg text-justify mb-8">
            {researchMechanisms[0].content}
          </p>
          <div className="w-full bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
            <img src={tripTwipImg} alt="TRIP & TWIP mechanisms" className="w-full h-auto object-cover max-h-[600px]" />
          </div>
        </section>

        {/* ITEM 2: LEFT TEXT, RIGHT IMAGE */}
        <section className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">{researchMechanisms[1].title}</h2>
              <p className="text-gray-700 leading-relaxed text-lg text-justify">
                {researchMechanisms[1].content}
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                <img src={misfitImg} alt="Misfit Volume" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Mechanisms;
