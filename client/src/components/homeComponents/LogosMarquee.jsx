import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LogosMarquee = () => {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    // Fetch all placements on mount
    async function loadLogos() {
      try {
        const res = await fetch('http://localhost:3001/api/placement/all');
        if (!res.ok) throw new Error(`Status ${res.status}`);
        const data = await res.json();
        // map to full URLs
        const urls = data.map(item => `http://localhost:3001/uploads/${item.logo}`);
        setLogos(urls);
      } catch (err) {
        console.error('Failed to load logos:', err);
      }
    }
    loadLogos();
  }, []);

  if (logos.length === 0) {
    // You can return a loader or nothing
    return null;
  }

  // Duplicate logos to make marquee seamless
  const marqueeLogos = [...logos, ...logos];

  return (
    <div className="bg-gray-100 py-4 overflow-x-hidden w-full">
      <motion.div
        className="flex gap-4 items-center whitespace-nowrap"
        animate={{ x: ['100%', '-100%'] }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: 'linear',
        }}
      >
        {marqueeLogos.map((src, index) => (
          <div
            key={index}
            className="min-w-[80px] w-20 h-16 sm:w-24 sm:h-20 bg-white border rounded-xl flex items-center justify-center p-2 shadow-sm"
          >
            <img
              src={src}
              alt={`logo-${index}`}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogosMarquee;
