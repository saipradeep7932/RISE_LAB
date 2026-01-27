import React from 'react';
import archaeoImg from '../assets/materials/archaeometallurgy.jpg';
import steelImg from '../assets/materials/univariant_steels.jpg';
import copperImg from '../assets/materials/copper_wire.jpg';

import { researchMaterials } from '../data/researchData';

const MaterialsPath = () => {
  return (
    <div className="min-h-screen bg-rise-mist font-sans text-rise-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Header */}
        <div className="border-b border-rise-ocean pb-4">
          <h1 className="text-4xl font-bold text-rise-deep tracking-tight">Materials</h1>
        </div>

        {/* ITEM 1 */}
        <section className="bg-rise-frost rounded-xl shadow-md border border-rise-ocean overflow-hidden p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-rise-deep mb-4">{researchMaterials[0].title}</h2>
              <p className="text-rise-deep leading-relaxed text-lg text-justify">
                {researchMaterials[0].content}
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full h-80 bg-rise-deep/5 rounded-lg overflow-hidden flex items-center justify-center">
                <img src={archaeoImg} alt="Archaeometallurgy" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* ITEM 2 */}
        <section className="bg-rise-frost rounded-xl shadow-md border border-rise-ocean overflow-hidden p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-rise-deep mb-4">{researchMaterials[1].title}</h2>
              <p className="text-rise-deep leading-relaxed text-lg text-justify">
                {researchMaterials[1].content}
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full h-80 bg-rise-deep/5 rounded-lg overflow-hidden flex items-center justify-center">
                <img src={steelImg} alt="Univariant Steels" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* ITEM 3 */}
        <section className="bg-rise-frost rounded-xl shadow-md border border-rise-ocean overflow-hidden p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-rise-deep mb-4">{researchMaterials[2].title}</h2>
              <p className="text-rise-deep leading-relaxed text-lg text-justify">
                {researchMaterials[2].content}
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full h-80 bg-rise-deep/5 rounded-lg overflow-hidden flex items-center justify-center">
                <img src={copperImg} alt="High Strength & High Conductivity Copper" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default MaterialsPath;
