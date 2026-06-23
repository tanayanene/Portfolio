import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Experience from "./pages/experience/Experience";
import Skills from "./pages/skills/Skills";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import { useEffect, useMemo, useState } from "react";
import { Box } from "@mui/material";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { getTheme } from "./theme/theme";

type ThemeMode = "light" | "dark";

const sections = [
  { id: "about", Component: About },
  { id: "experience", Component: Experience },
  { id: "skills", Component: Skills },
  { id: "contact", Component: Contact },
];

function App() {
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const muiTheme = useMemo(() => getTheme(theme), [theme]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Box sx={{ position: "sticky", top: 0, zIndex: 999 }}>
        <Navbar theme={theme} setTheme={setTheme} />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "5rem",
          padding: "4rem",
        }}
      >
        {sections.map(({ id, Component }) => (
          <Box key={id} id={id}>
            <Component />
          </Box>
        ))}
      </Box>
      <Box sx={{ mb: 2 }}>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
