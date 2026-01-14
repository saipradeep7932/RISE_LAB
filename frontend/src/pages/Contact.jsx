import React from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-12">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-iitrpr-blue mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600 mt-1">
                    RISE Lab, Department of CSE,<br />
                    J.C. Bose Block, IIT Ropar,<br />
                    Rupnagar, Punjab - 140001
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="text-iitrpr-blue mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600 mt-1">riselab@iitrpr.ac.in</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="text-iitrpr-blue mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600 mt-1">+91-1881-23xxxx</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="text-iitrpr-blue mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-900">Lab Hours</h3>
                  <p className="text-gray-600 mt-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-200 rounded-xl shadow-md overflow-hidden relative min-h-[400px]">
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              {/* In a real app, embed Google Maps iframe here */}
              <span className="font-medium">Google Maps Embed Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
