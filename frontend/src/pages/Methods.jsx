import React from 'react';

// Import images - Ensure these files exist in src/assets/methods/
// Fallback to a placeholder if import fails is handled by build tools usually erroring, 
// so we assume existence based on previous steps.
import tensileImg from '../assets/methods/tensile_stage.jpg';
import recyclingImg from '../assets/methods/recycling_machine.jpg';

import { researchMethods } from '../data/researchData';

const Methods = () => {
  return (
    <div className="min-h-screen bg-rise-mist font-sans text-rise-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Header */}
        <div className="border-b border-rise-ocean pb-4">
          <h1 className="text-4xl font-bold text-rise-deep tracking-tight">Methods</h1>
        </div>

        {/* ITEM 1 */}
        <section className="bg-rise-frost rounded-xl shadow-md border border-rise-ocean overflow-hidden p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-rise-deep mb-4">{researchMethods[0].title}</h2>
              <p className="text-rise-deep leading-relaxed text-lg text-justify">
                {researchMethods[0].content}
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full h-80 bg-rise-deep/5 rounded-lg overflow-hidden flex items-center justify-center">
                <img src={tensileImg} alt="Tensile and Compression Stage" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* ITEM 2 */}
        <section className="bg-rise-frost rounded-xl shadow-md border border-rise-ocean overflow-hidden p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-rise-deep mb-4">{researchMethods[1].title}</h2>
              <p className="text-rise-deep leading-relaxed text-lg text-justify">
                {researchMethods[1].content}
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full h-80 bg-rise-deep/5 rounded-lg overflow-hidden flex items-center justify-center">
                <img src={recyclingImg} alt="Solid State Recycling Machine" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Methods;
