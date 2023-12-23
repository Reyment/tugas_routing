import React from 'react';
import { useSpring, animated } from 'react-spring';

const Portfolio = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const slideIn = useSpring({
    from: { transform: 'translateY(50px)' },
    to: { transform: 'translateY(0)' },
    config: { duration: 800 },
  });

  return (
    <animated.div style={fadeIn} className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="text-center">
        <animated.h1 style={slideIn} className="text-4xl font-bold text-blue-500 mb-4">
          Portofolio
        </animated.h1>
        <animated.p style={slideIn} className="text-gray-700">
          Selamat datang di halaman portofolio saya dengan animasi.
        </animated.p>
        <animated.div style={slideIn} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-lg font-bold mb-2">Proyek 1</h2>
            <p className="text-gray-600">Deskripsi proyek 1.</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-lg font-bold mb-2">Proyek 2</h2>
            <p className="text-gray-600">Deskripsi proyek 2.</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-lg font-bold mb-2">Proyek 3</h2>
            <p className="text-gray-600">Deskripsi proyek 3.</p>
          </div>
          {/* Tambahkan proyek-proyek lain sesuai kebutuhan */}
        </animated.div>
      </div>
    </animated.div>
  );
};

export default Portfolio;
