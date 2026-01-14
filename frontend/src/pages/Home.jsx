import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from 'lucide-react';

const Home = () => {
  // --- Dynamic Image Loading Logic ---
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const modules = import.meta.glob('../assets/highlights/*');
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

  // --- News Data ---
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

  // --- Carousel Logic ---
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

  // --- News Ticker Logic ---
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

  // Helper to get previous and next image indices for the centered layout
  const getPrevIndex = () => (currentImageIndex - 1 + images.length) % images.length;
  const getNextIndex = () => (currentImageIndex + 1) % images.length;


  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">

      {/* --- SECTION 1: HERO SECTION --- */}
      <section className="relative w-full h-[500px] flex flex-col justify-center items-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden shadow-lg">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
          >
            RISE LAB
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl font-light text-blue-100 tracking-wide uppercase"
          >
            Responsive In-Situ Studies for Material Evolution
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="h-1 bg-blue-400 mx-auto mt-6 rounded-full"
          />
        </div>
      </section>


      {/* --- SECTION 2: ABOUT US --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center md:text-left">
        <h2 className="text-3xl font-bold text-blue-900 inline-block border-b-4 border-blue-500 pb-1 mb-8">About Us</h2>
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify space-y-6">
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


      {/* --- SECTION 3: RESEARCH HIGHLIGHTS (Centered Carousel) --- */}
      <section className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <h2 className="text-3xl font-bold text-blue-900">Research Highlights</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto relative h-[400px] flex items-center justify-center overflow-hidden px-4">
          {images.length > 0 ? (
            <>
              {/* Controls */}
              <button
                onClick={prevImage}
                className="absolute left-4 md:left-8 z-20 p-2 rounded-full bg-white/80 text-blue-900 shadow-md hover:bg-white transition-all disabled:opacity-50"
                aria-label="Previous Highlight"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 md:right-8 z-20 p-2 rounded-full bg-white/80 text-blue-900 shadow-md hover:bg-white transition-all disabled:opacity-50"
                aria-label="Next Highlight"
              >
                <ChevronRight size={32} />
              </button>

              {/* Images Container */}
              <div className="relative w-full h-full flex items-center justify-center">
                <AnimatePresence mode='popLayout'>
                  {/* Previous Image Hint (Left) */}
                  <motion.div
                    key={getPrevIndex()}
                    className="absolute left-0 w-1/3 h-64 opacity-40 blur-[2px] hidden md:block"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 0.4 }}
                    exit={{ x: -100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img src={images[getPrevIndex()]} className="w-full h-full object-cover rounded-xl" alt="" />
                  </motion.div>

                  {/* Active Image (Center) */}
                  <motion.div
                    key={currentImageIndex}
                    className="relative z-10 w-full md:w-3/5 h-80 md:h-96 shadow-2xl rounded-xl overflow-hidden border-2 border-white"
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

                  {/* Next Image Hint (Right) */}
                  <motion.div
                    key={getNextIndex()}
                    className="absolute right-0 w-1/3 h-64 opacity-40 blur-[2px] hidden md:block"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 0.4 }}
                    exit={{ x: 100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img src={images[getNextIndex()]} className="w-full h-full object-cover rounded-xl" alt="" />
                  </motion.div>
                </AnimatePresence>
              </div>
            </>
          ) : (
            <div className="text-gray-500">Loading Highlights...</div>
          )}
        </div>
      </section>


      {/* --- SECTION 4: LATEST NEWS (Interactive Ticker) --- */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Latest News</h2>

          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Controls */}
            <div className="flex md:flex-col gap-2 order-2 md:order-1">
              <button
                onClick={prevNews}
                className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                aria-label="Previous News"
              >
                <ChevronUp size={24} />
              </button>
              <button
                onClick={nextNews}
                className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                aria-label="Next News"
              >
                <ChevronDown size={24} />
              </button>
            </div>

            {/* News Display */}
            <div className="relative flex-1 h-32 md:h-40 bg-white rounded-xl shadow-lg border border-blue-100 flex items-center justify-center p-8 overflow-hidden order-1 md:order-2 w-full">
              <AnimatePresence mode='wait'>
                <motion.div
                  key={currentNewsIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute w-full px-4 text-center"
                >
                  <p className="text-lg font-medium text-gray-800 leading-relaxed">
                    <span className="text-blue-500 mr-2 font-bold">•</span>
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
                className={`h-2 rounded-full transition-all duration-300 ${idx === currentNewsIndex ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
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
