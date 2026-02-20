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
  // Update position if default changes (e.g. user clicks different Apply button)
  React.useEffect(() => {
    setFormData(prev => ({ ...prev, position: defaultPosition }));
  }, [defaultPosition]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, position, message } = formData;
    const recipient = "lava@iitrpr.ac.in";
    
    // Refined, professional subject line
    const subject = `Application: ${position} at RISE Lab - ${name}`;
    
    // Professionally formatted email body focusing on "interest"
    const body = `Dear Dr. Avala Lavakumar,\r\n\r\nMy name is ${name} and I am writing to express my strong interest in the ${position} opening at the RISE Lab.\r\n\r\nHere is a brief overview of my research interests and background:\r\n${message}\r\n\r\n[Please remember to attach your CV and other required documents before sending.]\r\n\r\nThank you for your time and consideration.\r\n\r\nSincerely,\r\n${name}`;

    // This specific URL forces Gmail to open a new draft in the browser
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the Gmail draft in a new tab
    window.open(gmailLink, '_blank');

    // Close modal and reset
    onClose();
    setFormData({ name: '', email: '', position: defaultPosition, message: '' });
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
                  className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg hover:shadow-indigo-500/30"
                >
                  <Send size={18} />
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default JoinLabModal;
