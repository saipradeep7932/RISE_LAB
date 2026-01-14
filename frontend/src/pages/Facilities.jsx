import React from 'react';
import { Server, Wifi, Cpu, Layers } from 'lucide-react';

const Facilities = () => {
  const facilitiesList = [
    {
      icon: <Server size={32} className="text-blue-600" />,
      title: "High Performance Computing Cluster",
      description: "A dedicated GPU cluster for deep learning training and large-scale data processing tasks."
    },
    {
      icon: <Wifi size={32} className="text-indigo-600" />,
      title: "IoT Testbed",
      description: "A distributed network of sensor nodes and edge devices for testing smart city and industrial IoT protocols."
    },
    {
      icon: <Cpu size={32} className="text-purple-600" />,
      title: "Embedded Systems Lab",
      description: "Workbenches equipped with FPGAs, microcontrollers, and oscilloscopes for hardware prototyping."
    },
    {
      icon: <Layers size={32} className="text-emerald-600" />,
      title: "Networking Lab",
      description: "SDN-enabled switches and routers for research in next-generation network architectures."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Lab Facilities</h1>
          <p className="mt-4 text-lg text-gray-600">
            State-of-the-art infrastructure supporting our research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilitiesList.map((facility, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 bg-gray-50 rounded-lg">
                {facility.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilities;
