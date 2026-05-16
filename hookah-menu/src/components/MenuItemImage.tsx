import React from 'react';
import { Box, Typography } from '@mui/material';
import { categoryGradients, categorySymbols } from '../data/menu';

interface Props {
  categoryName: string;   // food category name
  itemName: string;       // item ka naam — initials ke liye
  height?: number;        // default 180
}

const MenuItemImage: React.FC<Props> = ({ categoryName, itemName, height = 180 }) => {
  const gradient = categoryGradients[categoryName] 
    ?? "linear-gradient(135deg, #1a1200 0%, #3d2e00 100%)";
  
  const symbol = categorySymbols[categoryName] ?? "✦";

  // Item ke pehle 2 letters — decorative initials
  const initials = itemName
    .split(' ')
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase();

  return (
    <Box sx={{
      height,
      width: '100%',
      background: gradient,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative glow circle behind */}
      <Box sx={{
        position: 'absolute',
        width: 120,
        height: 120,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,0.18) 0%, transparent 70%)',
      }} />

      {/* Big emoji symbol */}
      <Typography sx={{ fontSize: '2.5rem', lineHeight: 1, mb: 0.5, zIndex: 1 }}>
        {symbol}
      </Typography>

      {/* Item initials */}
      <Typography sx={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '1.1rem',
        fontWeight: 700,
        color: 'rgba(201,168,76,0.7)',
        letterSpacing: '0.2em',
        zIndex: 1,
      }}>
        {initials}
      </Typography>

      {/* Subtle corner lines — decorative */}
      <Box sx={{
        position: 'absolute', top: 8, left: 8,
        width: 20, height: 20,
        borderTop: '1px solid rgba(201,168,76,0.3)',
        borderLeft: '1px solid rgba(201,168,76,0.3)',
      }} />
      <Box sx={{
        position: 'absolute', bottom: 8, right: 8,
        width: 20, height: 20,
        borderBottom: '1px solid rgba(201,168,76,0.3)',
        borderRight: '1px solid rgba(201,168,76,0.3)',
      }} />
    </Box>
  );
};

export default MenuItemImage;