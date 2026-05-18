import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { hookahPremium } from '../data/menu';
import DiamondIcon from '@mui/icons-material/Diamond';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import MenuItemImage from '../components/MenuItemImage';

const HookahPremium: React.FC = () => {
  return (
    <Box id="hookah-premium" sx={{
      py: { xs: 8, md: 12 }, px: { xs: 2, md: 6 },
      background: 'linear-gradient(180deg, #0f0d08 0%, #0a0a0a 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background glow */}
      <Box sx={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600, height: 400,
        background: 'radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5, mb: 1 }}>
          <DiamondIcon sx={{ color: '#c9a84c', fontSize: 18 }} />
          <Typography sx={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.7rem', letterSpacing: '0.4em', color: '#c9a84c' }}>
            EXCLUSIVE COLLECTION
          </Typography>
          <DiamondIcon sx={{ color: '#c9a84c', fontSize: 18 }} />
        </Box>
        <Typography sx={{
          textAlign: 'center',
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: { xs: '2.2rem', md: '3.5rem' },
          color: '#f5f0e8',
          mb: 2,
          fontWeight: 600,
        }}>
          Premium <Box component="span" sx={{ color: '#c9a84c' }}>Hokkas</Box>
        </Typography>
        <Typography sx={{ textAlign: 'center', color: 'rgba(245,240,232,0.5)', mb: 8, fontStyle: 'italic', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem' }}>
          Reserved for those who demand nothing but extraordinary
        </Typography>
      </motion.div>

      <Grid container spacing={3} sx={{ maxWidth: 1000, mx: 'auto' }}>
        {hookahPremium.map((item, i) => (
          <Grid size={{ xs: 12, sm: 6 }}  key={item.id}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card sx={{
                background: 'linear-gradient(145deg, rgba(201,168,76,0.08), rgba(255,255,255,0.02))',
                border: '1px solid rgba(201,168,76,0.35)',
                borderRadius: 3,
                overflow: 'hidden',
                cursor: 'pointer',
                position: 'relative',
                transition: 'all 0.4s ease',
                animation: 'pulse-gold 3s ease-in-out infinite',
                '&:hover': {
                  border: '1px solid rgba(201,168,76,0.8)',
                  boxShadow: '0 20px 80px rgba(201,168,76,0.25), 0 0 40px rgba(201,168,76,0.15)',
                  animation: 'none',
                },
              }}>
                {/* Premium badge */}
                {item.badge && (
                  <Chip
                    icon={<WorkspacePremiumIcon sx={{ fontSize: '14px !important', color: '#0a0a0a !important' }} />}
                    label={item.badge}
                    size="small"
                    sx={{
                      position: 'absolute', top: 12, left: 12, zIndex: 2,
                      background: 'linear-gradient(135deg, #c9a84c, #f5d98b)',
                      color: '#0a0a0a',
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '0.6rem',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      height: 22,
                    }}
                  />
                )}

                <Box sx={{ position: 'relative', overflow: 'hidden', height: 200 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt={item.name}
                    sx={{
                      transition: 'transform 0.7s ease',
                      filter: 'brightness(0.7) saturate(1.2)',
                      '&:hover': { transform: 'scale(1.12)' },
                    }}
                  />
                  <Box sx={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(transparent 30%, rgba(10,10,10,0.95))',
                  }} />
                  {/* Gold shimmer line */}
                  <Box sx={{
                    position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px',
                    background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)',
                  }} />
                  <Typography sx={{
                    position: 'absolute', bottom: 12, right: 14,
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#c9a84c',
                    textShadow: '0 0 20px rgba(201,168,76,0.5)',
                  }}>
                    {item.price}
                  </Typography>
                </Box>

                <CardContent sx={{ p: 2.5, background: 'linear-gradient(180deg, transparent, rgba(201,168,76,0.04))' }}>
                  <Typography sx={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 700, color: '#f5f0e8', mb: 0.5 }}>
                    {item.name}
                  </Typography>
                  <Typography sx={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.55)', lineHeight: 1.7, fontStyle: 'italic' }}>
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HookahPremium;