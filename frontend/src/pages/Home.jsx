import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown, Mail, Phone, MapPin, X } from 'lucide-react';

import { newsItems, motiveText, aboutText } from '../data/homeData';

const Home = () => {
  // --- 1. Dynamic Image Loading ---
  const [images, setImages] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // --- 2. Refs & State ---
  const carouselIntervalRef = useRef(null);
  const carouselTimeoutRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const newsIntervalRef = useRef(null);
  const newsTimeoutRef = useRef(null);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  const [selectedProfileImage, setSelectedProfileImage] = useState(null);

  // Motive Section Refs
  const motiveSectionRef = useRef(null);
  const motiveHeadingRef = useRef(null);
  const motiveEndRef = useRef(null);
  const [isMotiveActive, setIsMotiveActive] = useState(false);


  // --- 3. Effects ---
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
        setImagesLoaded(true);
      }
    };
    loadImages();
  }, []);

  // Carousel Logic
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

  // News Logic
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

  // Motive Observer
  useEffect(() => {
    if (!motiveSectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsMotiveActive(entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "-80px 0px 0px 0px" } // Exclude sticky header height (80px)
    );

    observer.observe(motiveSectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // --- Helpers ---
  const homeAssets = import.meta.glob('../assets/home/*.{png,jpg,jpeg,svg,webp}', { eager: true, as: 'url' });
  const getAsset = (name) => {
    for (const ext of ['jpg', 'jpeg', 'png', 'svg', 'webp']) {
      const key = `../assets/home/${name}.${ext}`;
      if (homeAssets[key]) return homeAssets[key];
    }
    return null;
  };

  const getPrevIndex = () => (currentImageIndex - 1 + images.length) % images.length;
  const getNextIndex = () => (currentImageIndex + 1) % images.length;

  const profilePhotos = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    src: getAsset(`photo${i + 1}`) || `https://placehold.co/400x800?text=Photo+${i + 1}`,
  }));

  return (
    <div className="min-h-screen bg-rise-mist font-sans text-rise-deep">

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
        <div className="absolute inset-0 bg-[#030663]/85"></div>
      </div>

      {/* =========================================================================
          SECTION 1: HERO / PROFILE + IMAGE STRIP
      ========================================================================= */}
      <section className="bg-rise-mist border-b border-rose-ocean/20 py-12 relative z-10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">

            {/* LEFT: PROFILE (30-35%) */}
            <div className="w-full lg:w-[35%] flex flex-col justify-center">
              <div className="bg-rise-frost rounded-2xl shadow-xl border border-rise-ocean/30 overflow-hidden p-8 text-center h-full flex flex-col justify-center text-rise-deep">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg relative shrink-0">
                  <div className="absolute inset-0 bg-gray-100 animate-pulse -z-10"></div>
                  <img
                    src={getAsset('profile') || "https://placehold.co/400x400?text=Profile"}
                    alt="Dr. Avala Lavakumar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold text-rise-deep mb-2">Dr. Avala Lavakumar</h2>
                <p className="text-rise-ocean font-semibold mb-4">Assistant Professor</p>

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
            <div className="w-full lg:w-[65%] relative min-h-[500px] bg-rise-mist rounded-2xl overflow-hidden shadow-lg border border-rise-ocean/30 flex">
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
        style={{ backgroundColor: isMotiveActive ? 'transparent' : '#030663' }} // Fallback bg if image not active
      >
        <div ref={motiveSectionRef} className="relative z-10 max-w-5xl mx-auto px-4">
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
            <div className="w-24 h-1.5 bg-rise-surf mx-auto mb-10 rounded-full"></div>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-rise-mist max-w-4xl mx-auto drop-shadow-md">
              Our lab is dedicated to pushing the boundaries of materials science through rigorous in-situ deformation studies and advanced microscopy. We aim to bridge the gap between fundamental research and real-world engineering applications, fostering innovation in both modern alloys and the understanding of ancient metallurgical heritage.
            </p>
            {/* SENTINEL FOR DEACTIVATION */}
            <div ref={motiveEndRef} className="h-px w-full bg-transparent mt-0 pointer-events-none opacity-0"></div>
          </motion.div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 3: RESEARCH HIGHLIGHTS (Existing)
      ========================================================================= */}
      <section className="py-20 bg-rise-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <h2 className="text-3xl font-bold text-rise-deep">Research Highlights</h2>
          <div className="w-24 h-1 bg-rise-ocean mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto relative h-[450px] flex items-center justify-center px-4">
          {images.length > 0 ? (
            <>
              {/* Controls */}
              <button
                onClick={prevImage}
                className="absolute left-4 md:left-8 z-20 p-2 rounded-full bg-rise-frost/80 text-rise-deep shadow-md hover:bg-rise-frost transition-all disabled:opacity-50"
                aria-label="Previous Highlight"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 md:right-8 z-20 p-2 rounded-full bg-rise-frost/80 text-rise-deep shadow-md hover:bg-rise-frost transition-all disabled:opacity-50"
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center md:text-left border-t border-rise-ocean/20 bg-rise-mist">
        <h2 className="text-3xl font-bold text-rise-deep inline-block border-b-4 border-rise-ocean pb-1 mb-10">About Us</h2>
        <div className="prose prose-lg max-w-none text-rise-deep leading-loose text-justify space-y-8">
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
      <section className="py-16 bg-rise-mist border-t border-rise-deep/10 shadow-inner">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-rise-deep mb-12 flex items-center justify-center gap-3">
            <span className="w-2 h-2 bg-rise-ocean rounded-full"></span>
            Latest News
            <span className="w-2 h-2 bg-rise-ocean rounded-full"></span>
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Controls */}
            <div className="flex md:flex-col gap-2 order-2 md:order-1">
              <button
                onClick={prevNews}
                className="p-3 rounded-full bg-rise-ocean text-white hover:bg-rise-deep transition-colors shadow-sm"
                aria-label="Previous News"
              >
                <ChevronUp size={24} />
              </button>
              <button
                onClick={nextNews}
                className="p-3 rounded-full bg-rise-ocean text-white hover:bg-rise-deep transition-colors shadow-sm"
                aria-label="Next News"
              >
                <ChevronDown size={24} />
              </button>
            </div>

            {/* News Display */}
            <div className="relative flex-1 h-32 md:h-44 bg-rise-frost rounded-xl shadow-md border-l-4 border-rise-ocean flex items-center justify-center p-8 overflow-hidden order-1 md:order-2 w-full">
              <AnimatePresence mode='wait'>
                <motion.div
                  key={currentNewsIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute w-full px-6 text-center"
                >
                  <p className="text-lg font-medium text-rise-deep leading-relaxed">
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
                className={`h-2 rounded-full transition-all duration-300 ${idx === currentNewsIndex ? 'w-8 bg-rise-deep' : 'w-2 bg-rise-frost/50 hover:bg-rise-frost'}`}
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
