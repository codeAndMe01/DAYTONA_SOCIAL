import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';
import NightlifeIcon from '@mui/icons-material/Nightlife';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const cards = [
  {
    icon: <AccessTimeIcon sx={{ color: '#c9a84c', fontSize: 32 }} />,
    title: 'Opening Hours',
    text: 'Mon – Thu: 5 PM – 2 AM\nFri – Sun: 4 PM – 3 AM',
  },
  {
    icon: <StarIcon sx={{ color: '#c9a84c', fontSize: 32 }} />,
    title: 'Premium Experience',
    text: 'Award-winning hookah crafted by expert shisha masters with imported tobacco.',
  },
  {
    icon: <NightlifeIcon sx={{ color: '#c9a84c', fontSize: 32 }} />,
    title: 'Lounge Ambiance',
    text: 'Immerse yourself in a cinematic nightlife atmosphere with live DJ sets.',
  },
  {
    icon: <RestaurantIcon sx={{ color: '#c9a84c', fontSize: 32 }} />,
    title: 'Culinary Excellence',
    text: 'A curated menu of Arabian, Turkish and fusion cuisine made fresh daily.',
  },
];

const About: React.FC = () => {
  return (
    <Box id="about" sx={{ py: { xs: 8, md: 12 }, px: { xs: 2, md: 6 }, background: '#0a0a0a' }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Typography sx={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '0.7rem',
          letterSpacing: '0.4em',
          color: '#c9a84c',
          textAlign: 'center',
          mb: 1,
        }}>
          ✦ OUR STORY ✦
        </Typography>
        <Typography className="section-title" variant="h2" sx={{
          textAlign: 'center',
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: { xs: '2.2rem', md: '3.5rem' },
          color: '#f5f0e8',
          mb: 3,
          fontWeight: 600,
        }}>
          A World of Luxury <Box component="span" sx={{ color: '#c9a84c' }}>& Flavour</Box>
        </Typography>
        <Typography sx={{
          textAlign: 'center',
          maxWidth: 600,
          mx: 'auto',
          color: 'rgba(245,240,232,0.6)',
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '1.15rem',
          lineHeight: 1.8,
          mb: 8,
          fontStyle: 'italic',
        }}>
          Nestled in the heart of the city, DAYTONA SOCIAL is where premium shisha, 
          exquisite cuisine and an unforgettable ambiance converge into one timeless experience.
        </Typography>
      </motion.div>

      <Grid container spacing={3} sx={{ maxWidth: 900, mx: 'auto' }}>
        {cards.map((card, i) => (
          <Grid size={{ xs: 12, sm: 6 }}  key={card.title}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Paper sx={{
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: 3,
                p: 3.5,
                height: '100%',
                transition: 'all 0.3s ease',
                '&:hover': {
                  border: '1px solid rgba(201,168,76,0.5)',
                  boxShadow: '0 0 30px rgba(201,168,76,0.1)',
                  transform: 'translateY(-4px)',
                },
              }}>
                <Box sx={{ mb: 2 }}>{card.icon}</Box>
                <Typography sx={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: '#f5f0e8',
                  mb: 1,
                }}>
                  {card.title}
                </Typography>
                <Typography sx={{
                  color: 'rgba(245,240,232,0.55)',
                  fontSize: '0.85rem',
                  lineHeight: 1.8,
                  whiteSpace: 'pre-line',
                }}>
                  {card.text}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default About;