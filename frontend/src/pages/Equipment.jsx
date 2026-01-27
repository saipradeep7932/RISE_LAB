import React, { useState } from 'react';

import { equipmentList } from '../data/equipmentData';
import EquipmentRequestModal from '../components/forms/EquipmentRequestModal';

const Equipment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEq, setSelectedEq] = useState('');

  const handleOpenModal = (eqName = '') => {
    setSelectedEq(eqName);
    setIsModalOpen(true);
  };

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
            onClick={() => handleOpenModal()}
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
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {equipmentList.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition group cursor-pointer" onClick={() => handleOpenModal(item.name)}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900 group-hover:text-blue-700 transition-colors">{item.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{item.category}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-600 truncate max-w-xs">{item.description || "High-precision laboratory equipment for materials research."}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <EquipmentRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        equipmentList={equipmentList}
        defaultEquipment={selectedEq}
      />
    </div>
  );
};

export default Equipment;
