import React, { useState, useEffect } from 'react';
import { Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          style={{ position: 'fixed', bottom: '100px', right: '20px', zIndex: 1000 }}
        >
          <Fab
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            size="small"
            sx={{
              background: 'linear-gradient(135deg, #c9a84c, #f5d98b)',
              color: '#0a0a0a',
              '&:hover': { background: 'linear-gradient(135deg, #f5d98b, #c9a84c)' },
            }}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;