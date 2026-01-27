import React, { useState } from 'react';
import { X, Send, CheckCircle, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const EquipmentRequestModal = ({ isOpen, onClose, equipmentList = [], defaultEquipment = "" }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    equipment: defaultEquipment,
    purpose: '',
    date: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  React.useEffect(() => {
    setFormData(prev => ({ ...prev, equipment: defaultEquipment }));
  }, [defaultEquipment]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        setFormData({ name: '', email: '', equipment: '', purpose: '', date: '' });
      }, 2500);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
        >
          <div className="bg-slate-900 p-6 flex justify-between items-center text-white">
            <h3 className="text-xl font-bold">Request Equipment Access</h3>
            <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>

          <div className="p-8">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                <CheckCircle size={64} className="text-green-500 animate-bounce" />
                <h4 className="text-2xl font-bold text-slate-800">Request Submitted!</h4>
                <p className="text-slate-600">The lab manager has been notified. You will receive an email shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 transition-shadow outline-none"
                    placeholder="Researcher Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email (Institute ID preferred)</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 transition-shadow outline-none"
                    placeholder="researcher@iitrpr.ac.in"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1">Equipment</label>
                    <select
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 transition-shadow outline-none bg-white"
                      value={formData.equipment}
                      onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
                      required
                    >
                      <option value="" disabled>Select Equipment</option>
                      {equipmentList.map(eq => (
                        <option key={eq.id} value={eq.name}>{eq.name}</option>
                      ))}
                      <option value="Other">Other / General Lab Access</option>
                    </select>
                  </div>

                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1">Preferred Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3.5 text-gray-400" size={18} />
                      <input
                        type="date"
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 transition-shadow outline-none"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Purpose of Usage</label>
                  <textarea
                    rows="3"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 transition-shadow outline-none resize-none"
                    placeholder="Briefly describe your experiment..."
                    value={formData.purpose}
                    onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded-xl transition-all shadow-lg hover:shadow-blue-500/30 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Submitting...</span>
                    ) : (
                      <>
                        <Send size={18} />
                        Submit Request
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default EquipmentRequestModal;
