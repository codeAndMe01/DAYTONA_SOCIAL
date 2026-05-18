import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import { hookahRegular } from "../data/menu";
import SmokingRoomsIcon from "@mui/icons-material/SmokingRooms";
import MenuItemImage from "../components/MenuItemImage";

const HookahRegular: React.FC = () => {
  return (
    <Box
      id="hookah-regular"
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 6 },
        background: "linear-gradient(180deg, #0a0a0a 0%, #0f0d08 100%)",
      }}
    >
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
          <SmokingRoomsIcon sx={{ color: "#c9a84c" }} />
          <Typography
            sx={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.4em",
              color: "#c9a84c",
            }}
          >
            HOOKAH MENU
          </Typography>
          <SmokingRoomsIcon sx={{ color: "#c9a84c" }} />
        </Box>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Cormorant Garamond, serif",
            fontSize: { xs: "2.2rem", md: "3.5rem" },
            color: "#f5f0e8",
            mb: 2,
            fontWeight: 600,
          }}
        >
          Regular{" "}
          <Box component="span" sx={{ color: "#c9a84c" }}>
            Hokkas
          </Box>
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            color: "rgba(245,240,232,0.5)",
            mb: 8,
            fontStyle: "italic",
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "1.1rem",
          }}
        >
          Handcrafted flavours for every mood and moment
        </Typography>
      </motion.div>

      <Grid container spacing={3} sx={{ maxWidth: 1000, mx: "auto" }}>
        {hookahRegular.map((item, i) => (
          <Grid
            // Sabse bada change yahan hai: xs, sm, md ko size ke andar kar diya
            size={{ xs: 12, sm: 6, md: 4 }}
            key={item.id}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card
                sx={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  borderRadius: 3,
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    border: "1px solid rgba(201,168,76,0.6)",
                    boxShadow:
                      "0 20px 60px rgba(201,168,76,0.15), 0 0 30px rgba(201,168,76,0.1)",
                  },
                }}
              >
                <Box
                  sx={{ position: "relative", overflow: "hidden",  height: 180,backgroundColor: '#0d0800' }}
                >
                  <CardMedia
                    component="img"
                    height="180"
                    image={item.image}
                    alt={item.name}
                    sx={{
                      transition: "transform 0.6s ease",
                      "&:hover": { transform: "scale(1.1)" },
                      filter: "brightness(0.8)",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "60%",
                      background:
                        "linear-gradient(transparent, rgba(10,10,10,0.9))",
                    }}
                  />
                  <Typography
                    sx={{
                      position: "absolute",
                      bottom: 10,
                      right: 12,
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      color: "#c9a84c",
                    }}
                  >
                    {item.price}
                  </Typography>
                </Box>
                <CardContent sx={{ p: 2.5 }}>
                  <Typography
                    sx={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "1.2rem",
                      fontWeight: 600,
                      color: "#f5f0e8",
                      mb: 0.5,
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.8rem",
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
    </Box>
  );
};

export default HookahRegular;
