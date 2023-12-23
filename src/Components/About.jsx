import React from 'react';
import { useSpring, animated } from 'react-spring';

const About = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <animated.div style={fadeIn} className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-500 mb-4">Tentang Saya</h1>
        <p className="text-gray-700">Ini adalah halaman about dengan animasi.</p>
      </div>
    </animated.div>
  );
};

export default About;
