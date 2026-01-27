import React, { useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const JoinLabModal = ({ isOpen, onClose, defaultPosition = "Ph.D. Student" }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: defaultPosition,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Update position if default changes (e.g. user clicks different Apply button)
  React.useEffect(() => {
    setFormData(prev => ({ ...prev, position: defaultPosition }));
  }, [defaultPosition]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset after 2 seconds
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        setFormData({ name: '', email: '', position: 'Ph.D. Student', message: '' });
      }, 2000);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
        >
          {/* Header */}
          <div className="bg-slate-900 p-6 flex justify-between items-center text-white">
            <h3 className="text-xl font-bold">Join RISE Lab</h3>
            <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="p-8">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                <CheckCircle size={64} className="text-green-500 animate-bounce" />
                <h4 className="text-2xl font-bold text-slate-800">Application Sent!</h4>
                <p className="text-slate-600">Thank you for your interest. We will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
                    placeholder="Dr. Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Position of Interest</label>
                  <select
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow bg-white"
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  >
                    <option value="Post-Doctoral Fellow">Post-Doctoral Fellow</option>
                    <option value="Ph.D. Student">Ph.D. Student</option>
                    <option value="M.Tech. Thesis">M.Tech. Thesis</option>
                    <option value="B.Tech. Thesis">B.Tech. Thesis</option>
                    <option value="Summer Trainee">Summer Trainee</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Message / Cover Letter</label>
                  <textarea
                    rows="4"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow resize-none"
                    placeholder="Briefly describe your research interests and motivation..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-indigo-500/30"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : (
                      <>
                        <Send size={18} />
                        Submit Application
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

export default JoinLabModal;
