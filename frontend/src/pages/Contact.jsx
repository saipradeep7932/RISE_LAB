import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-rise-mist font-sans text-rise-deep">
      {/* Header */}
      <div className="bg-rise-deep border-b border-rise-ocean py-12 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white tracking-tight">Contact Us</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">

        {/* SECTION 1: FACULTY CONTACT */}
        <section className="bg-rise-frost rounded-xl shadow-md border-t-4 border-rise-ocean overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="bg-rise-ocean/10 px-8 py-6 border-b border-rise-ocean/20">
            <h2 className="text-2xl font-bold text-rise-deep">Dr. Avala Lavakumar</h2>
          </div>
          <div className="p-8 space-y-6">
            {/* Address */}
            <div>
              <h3 className="text-sm font-bold text-rise-ocean uppercase tracking-wide mb-2 flex items-center gap-2">
                <MapPin size={16} /> Address
              </h3>
              <p className="text-lg text-rise-deep leading-relaxed">
                Department of Metallurgical and Materials Engineering<br />
                Indian Institute of Technology Ropar
              </p>
            </div>

            {/* Office */}
            <div>
              <h3 className="text-sm font-bold text-rise-ocean uppercase tracking-wide mb-2">Office</h3>
              <p className="text-lg text-rise-deep">
                B-M05, Har Gobind Khorana Building (SAB Building)
              </p>
            </div>

            <div className="flex flex-col md:flex-row md:gap-12 gap-6 pt-4 border-t border-rise-ocean/20">
              {/* Email */}
              <div>
                <h3 className="text-sm font-bold text-rise-ocean uppercase tracking-wide mb-2 flex items-center gap-2">
                  <Mail size={16} /> Email
                </h3>
                <a href="mailto:lava@iitrpr.ac.in" className="text-lg text-rise-deep font-medium hover:underline hover:text-rise-ocean">
                  lava@iitrpr.ac.in
                </a>
              </div>

              {/* Phone */}
              <div>
                <h3 className="text-sm font-bold text-rise-ocean uppercase tracking-wide mb-2 flex items-center gap-2">
                  <Phone size={16} /> Phone
                </h3>
                <a href="tel:+911881232412" className="text-lg text-rise-deep font-medium hover:underline hover:text-rise-ocean">
                  +91-1881-23-2412
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: RISE LABORATORY */}
        <section className="bg-rise-frost rounded-xl shadow-md border-t-4 border-rise-ocean overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="bg-rise-ocean/10 px-8 py-6 border-b border-rise-ocean/20">
            <h2 className="text-2xl font-bold text-rise-deep">RISE LABORATORY</h2>
          </div>
          <div className="p-8 space-y-6">
            {/* Address */}
            <div>
              <h3 className="text-sm font-bold text-rise-ocean uppercase tracking-wide mb-2 flex items-center gap-2">
                <MapPin size={16} /> Address
              </h3>
              <p className="text-lg text-rise-deep leading-relaxed">
                B-203, 2nd Floor, Block B, Har Gobind Khorana Building (SAB Building)<br />
                Department of Metallurgical and Materials Engineering<br />
                Indian Institute of Technology, Ropar<br />
                Bara Phool, Rupnagar, Punjab, INDIA
              </p>
            </div>

            <div className="flex flex-col md:flex-row md:gap-12 gap-6 pt-4 border-t border-rise-ocean/20">
              {/* Email */}
              <div>
                <h3 className="text-sm font-bold text-rise-ocean uppercase tracking-wide mb-2 flex items-center gap-2">
                  <Mail size={16} /> Email
                </h3>
                <a href="mailto:riselab@iitrpr.ac.in" className="text-lg text-rise-deep font-medium hover:underline hover:text-rise-ocean">
                  riselab@iitrpr.ac.in
                </a>
              </div>

              {/* Location */}
              <div>
                <h3 className="text-sm font-bold text-rise-ocean uppercase tracking-wide mb-2 flex items-center gap-2">
                  <ExternalLink size={16} /> Location
                </h3>
                <a
                  href="https://www.google.com/maps/place/Process+Metallurgy+Research+Laboratory+(PMR+Lab)/@30.9672193,76.4745956,17z/data=!3m1!4b1!4m6!3m5!1s0x3905550010ecb523:0x53a63c88f6eab8e3!8m2!3d30.9672193!4d76.4745956!16s%2Fg%2F11w25jgg4v?entry=tts&g_ep=EgoyMDI0MDcxMC4wKgBIAVAD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-rise-deep font-medium flex items-center gap-1 hover:underline hover:text-rise-ocean"
                >
                  Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: LOCATION MAP */}
        <section className="bg-rise-frost rounded-xl shadow-md border-t-4 border-rise-ocean overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="bg-rise-ocean/10 px-8 py-6 border-b border-rise-ocean/20">
            <h2 className="text-2xl font-bold text-rise-deep">Location Map</h2>
          </div>
          <div className="h-[380px] w-full bg-gray-100 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.279637035303!2d76.471354!3d30.970185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390551fdc6bfb3d7:0x5d0b3a9a8a4d23f8!2sIIT%20Ropar!5e0!3m2!1sen!2sin!4v0000000000"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RISE Lab Location"
            >
            </iframe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
