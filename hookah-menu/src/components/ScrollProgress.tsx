import React, { useState, useEffect } from 'react';

const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / totalHeight) * 100;
      setProgress(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: `${progress}%`,
      height: '3px',
      background: 'linear-gradient(90deg, #c9a84c, #f5d98b, #c9a84c)',
      zIndex: 9999,
      transition: 'width 0.1s ease',
    }} />
  );
};

export default ScrollProgress;