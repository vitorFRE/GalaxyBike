import React from 'react';
import { motion, useIsPresent } from 'framer-motion';

export const EnterAnimation = () => {
  const isPresent = useIsPresent();
  return (
    <motion.div
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0, transition: { duration: 2.3, ease: 'circOut' } }}
      exit={{ scaleY: 1, transition: { duration: 2.3, ease: 'circIn' } }}
      style={{ originY: isPresent ? 0 : 1 }}
      className="privacy-screen"
    />
  );
};
