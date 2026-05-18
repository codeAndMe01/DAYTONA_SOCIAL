import React, { useState } from "react";
import MenuItemImage from '../components/MenuItemImage';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Tabs,
  Tab,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { foodCategories } from "../data/menu";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";

const FoodMenu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const currentItems = foodCategories[activeCategory].items;

  return (
    <Box id="food-menu" sx={{ py: { xs: 8, md: 12 }, background: "#080808" }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1.5,
            mb: 1,
          }}
        >
          <RestaurantMenuIcon sx={{ color: "#c9a84c", fontSize: 18 }} />
          <Typography
            sx={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.4em",
              color: "#c9a84c",
            }}
          >
            CULINARY EXPERIENCE
          </Typography>
          <RestaurantMenuIcon sx={{ color: "#c9a84c", fontSize: 18 }} />
        </Box>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Cormorant Garamond, serif",
            fontSize: { xs: "2.2rem", md: "3.5rem" },
            color: "#f5f0e8",
            mb: 2,
            fontWeight: 600,
            px: 2,
          }}
        >
          Food{" "}
          <Box component="span" sx={{ color: "#c9a84c" }}>
            Menu
          </Box>
        </Typography>
      </motion.div>

      {/* Category Tabs - Sticky */}
      <Box
        sx={{
          position: "sticky",
          top: 64,
          zIndex: 10,
          background: "rgba(8,8,8,0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(201,168,76,0.15)",
          mb: 6,
          pt: 2,
        }}
      >
        <Tabs
          value={activeCategory}
          onChange={(_, v) => setActiveCategory(v)}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
          // MUI v6 ke liye slotProps ekdum sahi hai
          slotProps={{
            indicator: {
              style: { backgroundColor: "#c9a84c", height: 2 },
            },
          }}
          sx={{
            px: { xs: 1, md: 4 },
            "& .MuiTab-root": {
              color: "rgba(245,240,232,0.5)",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              fontWeight: 500,
              minHeight: 48,
              "&.Mui-selected": { color: "#c9a84c" },
              // Icon aur text ke beech thoda gap dene ke liye
              "& .MuiTab-iconWrapper": {
                marginBottom: "0px !important",
                marginRight: "6px",
              },
            },
          }}
        >
          {foodCategories.map((cat) => (
            <Tab
              key={cat.name}
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <span style={{ marginRight: "8px" }}>{cat.icon}</span>
                  {cat.name}
                </Box>
              }
            />
          ))}
        </Tabs>
      </Box>

      {/* Food Items */}
      <Box sx={{ px: { xs: 2, md: 6 }, maxWidth: 1000, mx: "auto" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Grid container spacing={3}>
              {currentItems.map((item, i) => (
                <Grid size={{ xs: 12, sm: 6 }} key={item.id}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ y: -6 }}
                  >
                    <Card
                      sx={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(201,168,76,0.15)",
                        borderRadius: 3,
                        overflow: "hidden",
                        height: "100%",
                        transition: "all 0.4s ease",
                        "&:hover": {
                          border: "1px solid rgba(201,168,76,0.5)",
                          boxShadow: "0 15px 50px rgba(201,168,76,0.12)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          overflow: "hidden",
                          height: 160,
                        }}
                      >
                       <Box sx={{ position: 'relative' }}>
  <MenuItemImage 
    categoryName={foodCategories[activeCategory].name} 
    itemName={item.name} 
    height={160} 
  />
  <Typography sx={{
    position: 'absolute', bottom: 8, right: 10,
    fontFamily: 'Cormorant Garamond, serif',
    fontSize: '1.2rem',
    fontWeight: 700,
    color: '#c9a84c',
  }}>
    {item.price}
  </Typography>
</Box>
                        <Box
                          sx={{
                            position: "absolute",
                            inset: 0,
                            background:
                              "linear-gradient(transparent 40%, rgba(10,10,10,0.85))",
                          }}
                        />
                        <Typography
                          sx={{
                            position: "absolute",
                            bottom: 8,
                            right: 10,
                            fontFamily: "Cormorant Garamond, serif",
                            fontSize: "1.2rem",
                            fontWeight: 700,
                            color: "#c9a84c",
                          }}
                        >
                          {item.price}
                        </Typography>
                      </Box>
                      <CardContent sx={{ p: 2 }}>
                        <Typography
                          sx={{
                            fontFamily: "Cormorant Garamond, serif",
                            fontSize: "1.1rem",
                            fontWeight: 600,
                            color: "#f5f0e8",
                            mb: 0.5,
                          }}
                        >
                          {item.name}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "0.78rem",
                            color: "rgba(245,240,232,0.5)",
                            lineHeight: 1.6,
                          }}
                        >
                          {item.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export default FoodMenu;
