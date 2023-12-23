import React from 'react';
import { useSpring, animated } from 'react-spring';

const Home = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const slideIn = useSpring({
    from: { transform: 'translateY(-50px)' },
    to: { transform: 'translateY(0)' },
    config: { duration: 800 },
  });

  return (
    <animated.div style={fadeIn} className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="text-center">
        <animated.h1 style={slideIn} className="text-4xl font-bold text-blue-500 mb-4">
          Selamat Datang!
        </animated.h1>
        <animated.p style={slideIn} className="text-gray-700">
          Ini adalah halaman home dengan animasi yang menarik.
        </animated.p>
      </div>
    </animated.div>
  );
};


export default Home;
