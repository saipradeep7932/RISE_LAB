import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown, Mail, Phone, MapPin, X } from 'lucide-react';

const Home = () => {
  // --- 1. Dynamic Image Loading (Highlights) ---
  const [images, setImages] = useState([]);
  useEffect(() => {
    const loadImages = async () => {
      const modules = import.meta.glob('../assets/highlights/*.{png,jpg,jpeg,svg,webp}');
      const loadedImages = [];
      for (const path in modules) {
        const mod = await modules[path]();
        loadedImages.push(mod.default);
      }
      if (loadedImages.length > 0) {
        setImages(loadedImages);
      }
    };
    loadImages();
  }, []);

  // --- Dynamic Image Loading (Home Cards & Profile) ---
  const homeAssets = import.meta.glob('../assets/home/*.{png,jpg,jpeg,svg,webp}', { eager: true, as: 'url' });

  const getAsset = (name) => {
    // Try to find the file with any extension
    for (const ext of ['jpg', 'jpeg', 'png', 'svg', 'webp']) {
      const key = `../assets/home/${name}.${ext}`;
      if (homeAssets[key]) return homeAssets[key];
    }
    return null; // or a placeholder
  };

  // --- 2. News Data ---
  const newsItems = [
    "RISE Lab has initiated a new consultancy project in collaboration with Pritika Auto Industries Limited, Punjab.",
    "Dr. Avala Lavakumar’s latest research paper, “Dynamics of Portevin–Le Chatelier Banding Revealed Through Grain Refinement in High-Mn Austenitic Steel: Sequential Overcoming of Necking,” has been accepted in the Journal of Materials Science & Technology.",
    "Mr. Gedela Santhosh Kumar joined as Ph.D. student in RISE Lab.",
    "Dr. Avala Lavakumar has been appointed to the Editorial Board of Scientific Reports, a journal from Springer Nature.",
    "RISE Lab has published a new journal article titled, \"Beyond the Blade: A Microstructural Investigation of an Ancient Indian Steel Sword,\" in Metallography, Microstructure, and Analysis (2025).",
    "RISE Lab and PMR Lab announced their collaborative publication in the Journal of Environmental Management.",
    "RISE Lab is seeking highly motivated Ph.D. students to join the research team.",
    "Dr. Avala Lavakumar selected as Divisional Editor for ASM Handbook Volume 27 – Renewable Materials.",
    "Mr. T. Vikram joined as Ph.D. student in RISE Lab under ERP.",
    "Dr. Avala Lavakumar is teaching a new course titled \"Electron Microscopy and Micro-Analysis.\"",
    "Mr. Gopikrishna Guguloth joined as Junior Research Fellow in RISE Lab.",
    "Mr. Arun Kumar Patro presented a paper at IIM-ATM 2024 & NMA, Bengaluru.",
    "Mr. Vishnu Prasad presented a poster at IIM-ATM 2024 & NMA, Bengaluru."
  ];

  // --- 3. Carousel Logic (Highlights) ---
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carouselIntervalRef = useRef(null);
  const carouselTimeoutRef = useRef(null);

  const startCarousel = () => {
    if (carouselIntervalRef.current) clearInterval(carouselIntervalRef.current);
    carouselIntervalRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
  };

  const pauseCarousel = () => {
    if (carouselIntervalRef.current) clearInterval(carouselIntervalRef.current);
    if (carouselTimeoutRef.current) clearTimeout(carouselTimeoutRef.current);
    carouselTimeoutRef.current = setTimeout(() => {
      startCarousel();
    }, 3000);
  };

  const nextImage = () => {
    pauseCarousel();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    pauseCarousel();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (images.length > 0) startCarousel();
    return () => {
      if (carouselIntervalRef.current) clearInterval(carouselIntervalRef.current);
      if (carouselTimeoutRef.current) clearTimeout(carouselTimeoutRef.current);
    };
  }, [images]);

  // Helper for carousel
  const getPrevIndex = () => (currentImageIndex - 1 + images.length) % images.length;
  const getNextIndex = () => (currentImageIndex + 1) % images.length;


  // --- 4. News Ticker Logic ---
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const newsIntervalRef = useRef(null);
  const newsTimeoutRef = useRef(null);

  const startNewsTicker = () => {
    if (newsIntervalRef.current) clearInterval(newsIntervalRef.current);
    newsIntervalRef.current = setInterval(() => {
      setCurrentNewsIndex((prev) => (prev + 1) % newsItems.length);
    }, 4000);
  };

  const pauseNewsTicker = () => {
    if (newsIntervalRef.current) clearInterval(newsIntervalRef.current);
    if (newsTimeoutRef.current) clearTimeout(newsTimeoutRef.current);
    newsTimeoutRef.current = setTimeout(() => {
      startNewsTicker();
    }, 3000);
  };

  const nextNews = () => {
    pauseNewsTicker();
    setCurrentNewsIndex((prev) => (prev + 1) % newsItems.length);
  };

  const prevNews = () => {
    pauseNewsTicker();
    setCurrentNewsIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  useEffect(() => {
    startNewsTicker();
    return () => {
      if (newsIntervalRef.current) clearInterval(newsIntervalRef.current);
      if (newsTimeoutRef.current) clearTimeout(newsTimeoutRef.current);
    };
  }, []);


  // --- 5. Image Strip Logic (Replaces Logic) ---
  const [selectedProfileImage, setSelectedProfileImage] = useState(null);

  // Generate slide data for photo1 to photo10
  const profilePhotos = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    src: getAsset(`photo${i + 1}`) || `https://placehold.co/400x800?text=Photo+${i + 1}`,
  }));


  // --- 6. Motive Scroll Trigger Logic ---
  const [isMotiveActive, setIsMotiveActive] = useState(false);
  const motiveHeadingRef = useRef(null);
  const motiveEndRef = useRef(null);

  useEffect(() => {
    if (!motiveHeadingRef.current || !motiveEndRef.current) return;

    // 1. Activate when Heading enters
    const headingObserver = new IntersectionObserver(
      ([entry]) => {
        // Activate if heading is visible
        if (entry.isIntersecting) {
          setIsMotiveActive(true);
        } else {
          // Deactivate ONLY if we scrolled UP past it (heading is below viewport)
          if (entry.boundingClientRect.top > 0) {
            setIsMotiveActive(false);
          }
        }
      },
      { threshold: 0.1 }
    );

    // 2. Deactivate when End Sentinel enters (scrolling down)
    const endObserver = new IntersectionObserver(
      ([entry]) => {
        // If the end sentinel peeks in from the bottom, we are done.
        if (entry.isIntersecting) {
          setIsMotiveActive(false);
        }
      },
      { threshold: 0.0, rootMargin: '0px 0px -100px 0px' } // Adjust for header/visual comfort
    );

    headingObserver.observe(motiveHeadingRef.current);
    endObserver.observe(motiveEndRef.current);

    return () => {
      headingObserver.disconnect();
      endObserver.disconnect();
    };
  }, []);


  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-800">

      {/* --- FIXED BACKGROUND IMAGE FOR MOTIVE SECTION --- */}
      {/* Activates only when heading enters, deactivates when section leaves */}
      <div
        className={`fixed inset-0 z-0 transition-opacity duration-700 ease-out pointer-events-none ${isMotiveActive ? 'opacity-100' : 'opacity-0'}`}
      >
        <img
          src={getAsset('motive') || "https://placehold.co/1920x1080?text=Motive+Background"}
          alt="Motive Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80"></div>
      </div>

      {/* =========================================================================
          SECTION 1: HERO / PROFILE + IMAGE STRIP
      ========================================================================= */}
      <section className="bg-white border-b border-gray-200 py-12 relative z-10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">

            {/* LEFT: PROFILE (30-35%) */}
            <div className="w-full lg:w-[35%] flex flex-col justify-center">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden p-8 text-center h-full flex flex-col justify-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg relative shrink-0">
                  <div className="absolute inset-0 bg-gray-100 animate-pulse -z-10"></div>
                  <img
                    src={getAsset('profile') || "https://placehold.co/400x400?text=Profile"}
                    alt="Dr. Avala Lavakumar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Dr. Avala Lavakumar</h2>
                <p className="text-indigo-600 font-semibold mb-4">Assistant Professor</p>

                <div className="space-y-3 text-sm text-slate-600 border-t border-gray-100 pt-6 text-left">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-gray-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-slate-800">Dept. of Metallurgical and Materials Eng.</p>
                      <p>Indian Institute of Technology Ropar</p>
                      <p className="text-xs text-gray-500 mt-1">B-M05, Har Gobind Khorana Building</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-gray-400 shrink-0" />
                    <a href="mailto:lava@iitrpr.ac.in" className="hover:text-indigo-600 transition-colors">lava@iitrpr.ac.in</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-gray-400 shrink-0" />
                    <a href="tel:+911881232412" className="hover:text-indigo-600 transition-colors">+91-1881-23-2412</a>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: IMAGE STRIP (65-70%) */}
            <div className="w-full lg:w-[65%] relative min-h-[500px] bg-gray-50 rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex">
              {profilePhotos.map((photo) => (
                <div
                  key={photo.id}
                  className="relative flex-1 h-[500px] group cursor-pointer border-r border-white/50 last:border-r-0 overflow-hidden"
                  onClick={() => setSelectedProfileImage(photo)}
                >
                  <img
                    src={photo.src}
                    alt={`Strip ${photo.id}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STRIP IMAGE PREVIEW MODAL */}
      <AnimatePresence>
        {selectedProfileImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProfileImage(null)}
          >
            <div className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center">
              <button
                onClick={() => setSelectedProfileImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors p-2"
              >
                <X size={32} />
              </button>
              <motion.img
                src={selectedProfileImage.src}
                alt="Zoomed View"
                className="rounded shadow-2xl max-h-[85vh] object-contain"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* =========================================================================
          SECTION 2: MOTIVE / VISION (Scroll Reveal BG)
      ========================================================================= */}
      <section
        className="relative w-full overflow-hidden py-32 flex items-center justify-center text-center z-10"
        style={{ backgroundColor: isMotiveActive ? 'transparent' : '#0f172a' }} // Fallback bg if image not active
      >
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2
              ref={motiveHeadingRef}
              className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight leading-tight"
            >
              Motive & Vision
            </h2>
            <div className="w-24 h-1.5 bg-yellow-400 mx-auto mb-10 rounded-full"></div>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-blue-50 max-w-4xl mx-auto drop-shadow-md">
              Our lab is dedicated to pushing the boundaries of materials science through rigorous in-situ deformation studies and advanced microscopy. We aim to bridge the gap between fundamental research and real-world engineering applications, fostering innovation in both modern alloys and the understanding of ancient metallurgical heritage.
            </p>
            {/* SENTINEL FOR DEACTIVATION */}
            <div ref={motiveEndRef} className="h-1 w-full bg-transparent mt-12 pointer-events-none opacity-0"></div>
          </motion.div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 3: RESEARCH HIGHLIGHTS (Existing)
      ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Research Highlights</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto relative h-[450px] flex items-center justify-center px-4">
          {images.length > 0 ? (
            <>
              {/* Controls */}
              <button
                onClick={prevImage}
                className="absolute left-4 md:left-8 z-20 p-2 rounded-full bg-white/80 text-indigo-900 shadow-md hover:bg-white transition-all disabled:opacity-50"
                aria-label="Previous Highlight"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 md:right-8 z-20 p-2 rounded-full bg-white/80 text-indigo-900 shadow-md hover:bg-white transition-all disabled:opacity-50"
                aria-label="Next Highlight"
              >
                <ChevronRight size={32} />
              </button>

              {/* Images Container */}
              <div className="relative w-full h-full flex items-center justify-center">
                <AnimatePresence mode='popLayout'>

                  {/* Active Image (Center) */}
                  <motion.div
                    key={currentImageIndex}
                    className="relative z-10 w-full md:w-3/5 h-[350px] md:h-[400px] shadow-2xl rounded-xl overflow-hidden border-4 border-white"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <img
                      src={images[currentImageIndex]}
                      alt={`Highlight ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </>
          ) : (
            <div className="text-gray-500 italic">No highlights images found in assets/highlights...</div>
          )}
        </div>
      </section>


      {/* =========================================================================
          SECTION 4: ABOUT US (Existing)
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center md:text-left border-t border-gray-100">
        <h2 className="text-3xl font-bold text-slate-900 inline-block border-b-4 border-indigo-500 pb-1 mb-10">About Us</h2>
        <div className="prose prose-lg max-w-none text-slate-700 leading-loose text-justify space-y-8">
          <p>
            As researchers in the Department of Metallurgical and Materials Science Engineering at IIT Ropar, we focus on in-situ deformation studies. Utilizing techniques like transmission electron microscopy (TEM), synchrotron X-ray diffraction, and digital image correlation (DIC), we analyze structures and measure deformation across a diverse range of materials to address critical engineering challenges.
          </p>
          <p>
            Our research spans from traditional steel, aluminum, copper, and titanium alloys with well-established properties to complex high/medium entropy alloys (HEA/MEA) and transformation/twin-induced plasticity (TRIP/TWIP) alloys that offer unique combinations of strength and ductility, with applications ranging from advanced automotive components to cutting-edge tools for the petrochemical industry.
          </p>
          <p>
            In contrast to this modern approach, we also delve into archaeometallurgy, analyzing ancient metal artifacts and techniques to understand the evolution of metals and their properties.
          </p>
        </div>
      </section>


      {/* =========================================================================
          SECTION 5: LATEST NEWS (Existing)
      ========================================================================= */}
      <section className="py-16 bg-white border-t border-gray-100 shadow-inner">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12 flex items-center justify-center gap-3">
            <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
            Latest News
            <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Controls */}
            <div className="flex md:flex-col gap-2 order-2 md:order-1">
              <button
                onClick={prevNews}
                className="p-3 rounded-full bg-slate-100 text-indigo-600 hover:bg-indigo-50 transition-colors shadow-sm"
                aria-label="Previous News"
              >
                <ChevronUp size={24} />
              </button>
              <button
                onClick={nextNews}
                className="p-3 rounded-full bg-slate-100 text-indigo-600 hover:bg-indigo-50 transition-colors shadow-sm"
                aria-label="Next News"
              >
                <ChevronDown size={24} />
              </button>
            </div>

            {/* News Display */}
            <div className="relative flex-1 h-32 md:h-44 bg-white rounded-xl shadow-md border-l-4 border-indigo-500 flex items-center justify-center p-8 overflow-hidden order-1 md:order-2 w-full">
              <AnimatePresence mode='wait'>
                <motion.div
                  key={currentNewsIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute w-full px-6 text-center"
                >
                  <p className="text-lg font-medium text-slate-800 leading-relaxed">
                    {newsItems[currentNewsIndex]}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {newsItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  pauseNewsTicker();
                  setCurrentNewsIndex(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${idx === currentNewsIndex ? 'w-8 bg-indigo-600' : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Go to news item ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
