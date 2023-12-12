// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';


const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
