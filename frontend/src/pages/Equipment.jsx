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
    <div className="min-h-screen bg-rise-mist py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 border-b border-rise-ocean pb-6">
          <div>
            <h1 className="text-3xl font-bold text-rise-deep">Equipment Inventory</h1>
            <p className="text-rise-deep/80 mt-1">Browse and request access to lab equipment.</p>
          </div>
          <button
            type="button"
            onClick={() => handleOpenModal()}
            className="mt-4 sm:mt-0 bg-rise-ocean text-white px-6 py-2 rounded-lg hover:bg-rise-deep transition shadow-sm font-medium"
          >
            Request Equipment
          </button>
        </div>

        <div className="bg-rise-frost shadow-md overflow-hidden sm:rounded-lg border border-rise-ocean/30">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-rise-ocean/20">
              <thead className="bg-rise-ocean/10">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-rise-deep uppercase tracking-wider">
                    Equipment Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-rise-deep uppercase tracking-wider">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-rise-deep uppercase tracking-wider">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="bg-rise-frost divide-y divide-rise-ocean/10">
                {equipmentList.map((item) => (
                  <tr key={item.id} className="hover:bg-rise-ocean/10 transition group cursor-pointer" onClick={() => handleOpenModal(item.name)}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-rise-deep group-hover:text-rise-ocean transition-colors">{item.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-rise-deep/70">{item.category}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-rise-deep/80 truncate max-w-xs">{item.description || "High-precision laboratory equipment for materials research."}</div>
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
