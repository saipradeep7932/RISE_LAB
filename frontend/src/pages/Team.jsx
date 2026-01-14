import React from 'react';
import { Mail, Linkedin, Globe } from 'lucide-react';

const Team = () => {
  // Placeholder Data
  const faculty = [
    { name: "Dr. Faculty Name", role: "Lab Director / Associate Professor", email: "faculty@iitrpr.ac.in" }
  ];

  const students = [
    { name: "Student Name 1", role: "Ph.D. Scholar", area: "IoT Security" },
    { name: "Student Name 2", role: "Ph.D. Scholar", area: "Machine Learning" },
    { name: "Student Name 3", role: "M.Tech Student", area: "Embedded Systems" },
    { name: "Student Name 4", role: "Research Assistant", area: "Web Development" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Team</h1>
            <p className="mt-2 text-lg text-gray-600">The minds behind RISE Lab.</p>
          </div>
          <button
            type="button"
            className="hidden sm:block bg-iitrpr-blue text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition shadow-sm font-medium"
          >
            Join RISE Lab
          </button>
        </div>

        {/* Faculty Section */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Faculty</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {faculty.map((member, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="p-6 text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 border-4 border-white shadow-sm"></div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <div className="flex justify-center space-x-4 mt-4 text-gray-400">
                  <Mail size={18} className="hover:text-iitrpr-blue cursor-pointer" />
                  <Linkedin size={18} className="hover:text-blue-700 cursor-pointer" />
                  <Globe size={18} className="hover:text-gray-600 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Students Section */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Research Scholars & Staff</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {students.map((student, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition">
              <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-3"></div>
              <h3 className="text-lg font-semibold text-gray-900">{student.name}</h3>
              <p className="text-sm text-gray-500 font-medium">{student.role}</p>
              <p className="text-xs text-gray-400 mt-1">{student.area}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Team;
