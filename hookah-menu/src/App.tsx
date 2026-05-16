import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box, Typography } from '@mui/material';
import './index.css';

// Components
import Navbar from './components/Navbar';
import FloatingButtons from './components/FloatingButton';
import BackToTop from './components/BackToTop';
import ScrollProgress from './components/ScrollProgress';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import HookahRegular from './sections/HokkahRegular'
import HookahPremium from './sections/HokkahPremium';
import FoodMenu from './sections/FoodMenu';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#c9a84c' },
    background: { default: '#0a0a0a', paper: '#111111' },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: { body: { backgroundColor: '#0a0a0a' } },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <HookahRegular />
        <HookahPremium />
        <FoodMenu />
      </main>

      {/* Footer */}
      <Box component="footer" sx={{
        py: 5, textAlign: 'center',
        borderTop: '1px solid rgba(201,168,76,0.2)',
        background: '#050505',
      }}>
        <Typography sx={{ fontFamily: 'Cormorant Garamond, serif', color: '#c9a84c', fontSize: '1.4rem', mb: 1 }}>
          ✦ DAYTONA SOCIAL ✦
        </Typography>
        <Typography sx={{ color: 'rgba(245,240,232,0.3)', fontSize: '0.75rem', letterSpacing: '0.1em' }}>
          © 2025 DAYTONA SOCIAL. All rights reserved.
        </Typography>
        <Typography sx={{ color: 'rgba(245,240,232,0.2)', fontSize: '0.7rem', mt: 1 }}>
          Luxury Hookah & Dining Experience
        </Typography>
      </Box>

      <FloatingButtons />
      <BackToTop />
    </ThemeProvider>
  );
}

export default App;