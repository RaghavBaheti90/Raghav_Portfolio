import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  { id: 1, src: '/Raghav-Portfolio/assets/pro 1.jpg', alt: 'Project Image 1' },
  { id: 2, src: '/Raghav-Portfolio/assets/pro 2.jpg', alt: 'Project Image 2' },
  { id: 3, src: '/Raghav-Portfolio/assets/pro 3.jpg', alt: 'Project Image 3' },
];

export const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <div className="container mx-auto max-w-3xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Project <span className="gradient-text">Showcase</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Swipe through some of my recent work and ideas
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-border bg-secondary/20 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <img
                src={images[current].src}
                alt={images[current].alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Carousel Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all ${
                  index === current
                    ? 'bg-primary w-8'
                    : 'bg-muted-foreground/40 w-2 hover:bg-muted-foreground/60'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          {/* Image Counter */}
          <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-muted-foreground border border-border/50">
            {current + 1} / {images.length}
          </div>
        </div>

        {/* Image Description */}
        <motion.p
          key={current}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="text-center mt-6 text-muted-foreground"
        >
          {images[current].alt}
        </motion.p>
      </div>
    </section>
  );
};
