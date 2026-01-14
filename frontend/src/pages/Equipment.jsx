import React from 'react';

const Equipment = () => {
  const equipmentList = [
    { id: 1, name: "NVIDIA DGX Station", category: "Computing", status: "Available" },
    { id: 2, name: "Xilinx Alveo Accelerator Cards", category: "Hardware", status: "In Use" },
    { id: 3, name: "Tektronix Oscilloscope", category: "Measurement", status: "Available" },
    { id: 4, name: "Raspberry Pi 4 Cluster", category: "IoT", status: "Available" },
    { id: 5, name: "Logic Analyzer", category: "Measurement", status: "Maintenance" },
    { id: 6, name: "3D Printer (Prusa i3)", category: "Fabrication", status: "Available" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Equipment Inventory</h1>
            <p className="text-gray-600 mt-1">Browse and request access to lab equipment.</p>
          </div>
          <button
            type="button"
            className="mt-4 sm:mt-0 bg-iitrpr-blue text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition shadow-sm font-medium"
          >
            Request Equipment
          </button>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Equipment Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {equipmentList.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{item.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{item.category}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.status === 'Available' ? 'bg-green-100 text-green-800' :
                          item.status === 'In Use' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                        }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button type="button" className="text-iitrpr-blue hover:text-blue-900 disabled:opacity-50" disabled={item.status !== 'Available'}>
                        Select
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipment;
