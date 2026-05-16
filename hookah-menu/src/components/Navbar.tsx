import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, Box, useMediaQuery } from '@mui/material';
import { Link } from 'react-scroll';

const navItems = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Regular', to: 'hookah-regular' },
  { label: 'Premium', to: 'hookah-premium' },
  { label: 'Food', to: 'food-menu' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const isMobile = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: scrolled
          ? 'rgba(10, 10, 10, 0.95)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.2)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: isMobile ? 1 : 4 }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: 'Cormorant Garamond, serif',
            fontWeight: 700,
            color: '#c9a84c',
            letterSpacing: '0.1em',
            fontSize: isMobile ? '1rem' : '1.3rem',
          }}
        >
          ✦ DAYTONA SOCIAL
        </Typography>

        <Box sx={{ display: 'flex', overflowX: 'auto' }}>
          <Tabs
            value={activeTab}
            onChange={(_, v) => setActiveTab(v)}
            textColor="inherit"
            slotProps={{
                indicator:{
                    style: { backgroundColor: '#c9a84c', height: '2px' },
                }
            }}
            sx={{ minHeight: 'unset' }}
          >
            {navItems.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                smooth
                duration={600}
                offset={-64}
                onClick={() => setActiveTab(i)}
              >
                <Tab
                  label={item.label}
                  sx={{
                    color: activeTab === i ? '#c9a84c' : 'rgba(245,240,232,0.6)',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: isMobile ? '0.6rem' : '0.75rem',
                    letterSpacing: '0.08em',
                    fontWeight: 500,
                    minWidth: isMobile ? 50 : 80,
                    px: isMobile ? 0.5 : 2,
                    minHeight: 48,
                    cursor: 'pointer',
                    '&:hover': { color: '#c9a84c' },
                  }}
                />
              </Link>
            ))}
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;