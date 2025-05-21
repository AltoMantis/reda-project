"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  {
    id: 1,
    image: "/images/photo-hero-1.jpg",
    content: (
      <div className="text-gray-100 text-center max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4">A weave of solutions</h2>
        <p className="text-sm md:text-base lg:text-lg mt-2 opacity-90">the good combination of chemical knowledge and textile creativity</p>
      </div>
    ),
  },
  {
    id: 2,
    image: "/images/image-laboratoire-3.jpg",
    content: (
      <div className="text-gray-100 text-center max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4">A different chemistry towards a sustainable future</h2>
      </div>
    ),
  },
  {
    id: 3,
    image: "/images/photo-hero-3.jpg",
    content: (
      <div className="text-gray-100 text-center max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4">For a conscious management of resources</h2>
      </div>
    ),
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % cards.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentCard = cards[index];

  const handleDotClick = (newIndex: number) => {
    setIndex(newIndex);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Réactive l'auto-play après 10 secondes
  };

  return (
    <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCard.id}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${currentCard.image})` }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Overlay sombre avec gradient */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>

          {/* Contenu texte au-dessus */}
          <motion.div 
            className="relative p-4 md:p-8 text-center z-10"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {currentCard.content}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              i === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

