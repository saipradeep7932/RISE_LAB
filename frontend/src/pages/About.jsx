import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">About RISE Lab</h1>
          <p className="mt-4 text-lg text-gray-600">
            Research in Intelligent Systems & Engineering at IIT Ropar
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-blue-900">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To be a global leader in intelligent systems research, fostering innovation that bridges theoretical computer science with practical engineering solutions for societal impact.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-indigo-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To conduct high-quality research in AI, IoT, and Systems; to train the next generation of researchers; and to collaborate with industry to translate research into real-world applications.
            </p>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Do</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            The RISE Lab focuses on the intersection of hardware and software. We explore how intelligent algorithms can be efficiently deployed on resource-constrained devices, how large-scale systems can be made more secure and reliable, and how data can be leveraged to solve interdisciplinary problems.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our researchers work on projects ranging from Smart City infrastructure and Healthcare IoT to Adversarial Machine Learning and High-Performance Computing.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
