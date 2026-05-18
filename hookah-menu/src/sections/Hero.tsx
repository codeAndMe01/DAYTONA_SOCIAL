import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const Hero: React.FC = () => {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: `
          linear-gradient(180deg, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.7) 60%, rgba(10,10,10,1) 100%),
          url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1600&q=80')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Ambient glow orbs */}
      <Box sx={{
        position: 'absolute', top: '20%', left: '10%',
        width: 300, height: 300,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)',
        filter: 'blur(40px)',
        animation: 'float 6s ease-in-out infinite',
      }} />
      <Box sx={{
        position: 'absolute', bottom: '30%', right: '10%',
        width: 200, height: 200,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)',
        filter: 'blur(30px)',
        animation: 'float 8s ease-in-out infinite reverse',
      }} />

      {/* Hero Content */}
      <Box sx={{ textAlign: 'center', zIndex: 2, px: 3, maxWidth: 700 }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography sx={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '0.75rem',
            letterSpacing: '0.4em',
            color: '#c9a84c',
            mb: 2,
            fontWeight: 500,
          }}>
            ✦ PREMIUM LOUNGE & DINING ✦
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Typography variant="h1" sx={{
            fontFamily: 'Cormorant Garamond, serif',
            fontWeight: 700,
            fontSize: { xs: '3rem', sm: '4.5rem', md: '6rem' },
            color: '#f5f0e8',
            lineHeight: 1.1,
            mb: 2,
          }}>
            DAYTONA 
            <Box component="span" sx={{ display: 'block', color: '#c9a84c' }}>
              SOCIAL
            </Box>
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Typography sx={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: { xs: '1.1rem', md: '1.4rem' },
            color: 'rgba(245,240,232,0.7)',
            mb: 5,
            fontStyle: 'italic',
            fontWeight: 300,
          }}>
            Where every evening becomes a story worth telling
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link to="about" smooth duration={800} offset={-64}>
            <Button
              startIcon={<AutoAwesomeIcon />}
              sx={{
                background: 'linear-gradient(135deg, #c9a84c, #f5d98b)',
                color: '#0a0a0a',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 600,
                fontSize: '0.8rem',
                letterSpacing: '0.2em',
                px: 5,
                py: 1.8,
                borderRadius: '50px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                '&:hover': {
                  background: 'linear-gradient(135deg, #f5d98b, #c9a84c)',
                  boxShadow: '0 0 40px rgba(201,168,76,0.5)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Explore Menu
            </Button>
          </Link>
        </motion.div>
      </Box>

      {/* Scroll indicator */}
      <motion.div
        style={{ position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)' }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <KeyboardArrowDownIcon sx={{ color: '#c9a84c', fontSize: '2rem' }} />
      </motion.div>
    </Box>
  );
};

export default Hero;