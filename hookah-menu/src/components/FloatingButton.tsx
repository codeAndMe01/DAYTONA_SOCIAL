import React from 'react';
import { Fab, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { motion } from 'framer-motion';

const buttons = [
  { icon: <WhatsAppIcon />, color: '#25D366', label: 'WhatsApp', href: 'https://wa.me/911234567890' },
  { icon: <InstagramIcon />, color: '#E1306C', label: 'Instagram', href: 'https://instagram.com' },
  { icon: <PhoneIcon />, color: '#c9a84c', label: 'Call Us', href: 'tel:+911234567890' },
  { icon: <LocationOnIcon />, color: '#4285F4', label: 'Google Maps', href: 'https://maps.google.com' },
];

const FloatingButtons: React.FC = () => {
  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      zIndex: 1000,
    }}>
      {buttons.map((btn, i) => (
        <motion.div
          key={btn.label}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 + 0.5 }}
        >
          <Tooltip title={btn.label} placement="left">
            <Fab
              component="a"
              href={btn.href}
              target="_blank"
              size="small"
              sx={{
                backgroundColor: btn.color,
                color: '#fff',
                width: 44,
                height: 44,
                '&:hover': {
                  backgroundColor: btn.color,
                  transform: 'scale(1.15)',
                  boxShadow: `0 0 20px ${btn.color}80`,
                },
                transition: 'all 0.3s ease',
              }}
            >
              {btn.icon}
            </Fab>
          </Tooltip>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingButtons;