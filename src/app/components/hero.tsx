"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  {
    id: 1,
    image: "/images/photo-hero-1.jpg",
    content: (
      <div className="text-gray-100 text-center">
        <h2 className="text-3xl font-extrabold">A weave of solutions</h2>
        <p className="mt-2">the good combination of chemical knowledge and textile creativity</p>
      </div>
    ),
  },
  {
    id: 2,
    image: "/images/image-laboratoire-3.jpg",
    content: (
      <div className="text-gray-100 text-center">
        <h2 className="text-3xl font-extrabold">A different chemistry towards a sustainable future</h2>
      </div>
    ),
  },
  {
    id: 3,
    image: "/images/photo-hero-3.jpg",
    content: (
      <div className="text-gray-100 text-center">
        <h2 className="text-3xl font-extrabold">For a conscious management of resources</h2>
      </div>
    ),
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentCard = cards[index];

  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCard.id}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${currentCard.image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Overlay sombre à 70% */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>

          {/* Contenu texte au-dessus */}
          <div className="relative p-8 text-center z-10">
            {currentCard.content}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

