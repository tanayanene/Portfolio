import Profile from "../../assets/Portfolio_image.png";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Box
        sx={{
          flex: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: "50px",
            display: "inline-block",
            background:
              "linear-gradient(to right, #1094d6ff, #992bbe, #e80c7a, #f45c5cff)",
            backgroundSize: "100%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Hi, I am Tanaya.
        </Typography>

        <Typography
          sx={{
            lineHeight: "35px",
          }}
        >
          I like turning ideas into experiences people actually enjoy using.
          From smooth UI interactions to clean frontend architecture, I enjoy
          building applications that feel intuitive, modern, and visually alive.
          Currently exploring the world beyond frontend with full stack
          development — one project, redesign, and late-night debugging session
          at a time.
        </Typography>
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={Profile}
          alt="Profile"
          sx={{
            borderRadius: "1rem",
            height: "25rem",
            width: "25rem",
            transition: "box-shadow 0.8s ease, transform 0.8s ease",

            "&:hover": {
              transform: "scale(1.02)",
              boxShadow: "0 0 10px 2px rgba(255, 187, 187, 1)",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default About;
