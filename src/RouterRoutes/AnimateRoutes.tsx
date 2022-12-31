import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';
import { Home } from '../Pages/Home';
import { Contact } from '../Pages/Contact';
import { Plans } from '../Pages/Plans';
import { Terms } from '../Pages/Terms';

const AnimateRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/planos" element={<Plans />} />
        <Route path="/termos" element={<Terms />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimateRoutes;
