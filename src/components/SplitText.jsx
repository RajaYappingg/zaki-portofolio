import React from 'react';
import { motion } from 'framer-motion';

const SplitText = ({
  text,
  className = '',
  delay = 0,
  from = { opacity: 0, y: 50 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-50px',
  textAlign = 'center',
}) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay / 1000,
      },
    },
  };

  const child = {
    hidden: { ...from },
    visible: {
      ...to,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={`inline-block ${className}`}
      style={{ textAlign, whiteSpace: 'normal', wordWrap: 'break-word' }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: rootMargin, amount: threshold }}
    >
      {words.map((word, i) => (
        <span key={i} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {word.split('').map((char, j) => (
            <motion.span
              key={j}
              variants={child}
              style={{ display: 'inline-block' }}
            >
              {char}
            </motion.span>
          ))}
          <span style={{ display: 'inline-block' }}>&nbsp;</span>
        </span>
      ))}
    </motion.div>
  );
};

export default SplitText;
