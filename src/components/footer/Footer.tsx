import { Box, Container, Typography } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: 1,
        borderColor: "divider",
      }}
    >
      <Container
        sx={{
          py: { xs: 2, md: 2 },
          textAlign: "center",
        }}
      >
        <Typography variant="subtitle1" fontWeight={700}>
          Tanaya Nene
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Frontend developer focused on clean, responsive interfaces.
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mt: 3,
            display: "inline-flex",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <CopyrightIcon fontSize="inherit" />
          {new Date().getFullYear()} Tanaya Nene. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
