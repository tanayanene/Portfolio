import { Box, Grid, Typography } from "@mui/material";
import InfoCard from "../../components/card/Card";
import {
  Javascript as JavascriptIcon,
  Html as HtmlIcon,
  Css as CssIcon,
  DataObject as DataObjectIcon,
  Storage as StorageIcon,
  IntegrationInstructions as IntegrationInstructionsIcon,
  Hub as HubIcon,
  AccountTree as AccountTreeIcon,
  Api as ApiIcon,
  Layers as LayersIcon,
  Terminal as TerminalIcon,
  Inventory2 as Inventory2Icon,
  DesignServices as DesignServicesIcon,
  Cloud as CloudIcon,
  Code as CodeIcon,
} from "@mui/icons-material";

const skills = [
  {
    name: "React JS",
    icon: <DataObjectIcon sx={{ fontSize: "3rem", color: "#61dafb" }} />,
  },
  {
    name: "HTML",
    icon: <HtmlIcon sx={{ fontSize: "3rem", color: "#e34f26" }} />,
  },
  {
    name: "CSS",
    icon: <CssIcon sx={{ fontSize: "3rem", color: "#1572b6" }} />,
  },
  {
    name: "JavaScript",
    icon: <JavascriptIcon sx={{ fontSize: "3rem", color: "#f7df1e" }} />,
  },
  {
    name: "TypeScript",
    icon: (
      <CodeIcon
        sx={{
          fontSize: "3rem",
          color: "#3178c6",
        }}
      />
    ),
  },
  {
    name: "Next.js",
    icon: <CodeIcon sx={{ fontSize: "3rem" }} />,
  },
  {
    name: "Node.js",
    icon: <HubIcon sx={{ fontSize: "3rem", color: "#68a063" }} />,
  },
  {
    name: "SQL",
    icon: <StorageIcon sx={{ fontSize: "3rem" }} />,
  },
  {
    name: "Jest",
    icon: (
      <IntegrationInstructionsIcon
        sx={{ fontSize: "3rem", color: "#c21325" }}
      />
    ),
  },
  {
    name: "Git",
    icon: <AccountTreeIcon sx={{ fontSize: "3rem", color: "#f05032" }} />,
  },
  {
    name: "Vite",
    icon: <DataObjectIcon sx={{ fontSize: "3rem", color: "#646cff" }} />,
  },
  {
    name: "Redux",
    icon: <HubIcon sx={{ fontSize: "3rem", color: "#764abc" }} />,
  },
  {
    name: "REST APIs",
    icon: <ApiIcon sx={{ fontSize: "3rem" }} />,
  },
  {
    name: "GraphQL",
    icon: <HubIcon sx={{ fontSize: "3rem", color: "#e10098" }} />,
  },
  {
    name: "Sass/SCSS",
    icon: <CssIcon sx={{ fontSize: "3rem", color: "#cc6699" }} />,
  },
  {
    name: "Material-UI",
    icon: <LayersIcon sx={{ fontSize: "3rem", color: "#007fff" }} />,
  },
  {
    name: "VS Code",
    icon: <TerminalIcon sx={{ fontSize: "3rem", color: "#007acc" }} />,
  },
  {
    name: "Webpack",
    icon: <Inventory2Icon sx={{ fontSize: "3rem", color: "#8dd6f9" }} />,
  },
  {
    name: "Figma",
    icon: <DesignServicesIcon sx={{ fontSize: "3rem", color: "#f24e1e" }} />,
  },
  {
    name: "Azure",
    icon: <CloudIcon sx={{ fontSize: "3rem", color: "#0078d4" }} />,
  },
];

const Skills = () => {
  return (
    <Box sx={{ w: "100%" }}>
      <Typography
        variant="h4"
        fontWeight={700}
        sx={{
          mb: 4,
          background:
            "linear-gradient(to right, #1094d6ff, #992bbe, #e80c7a, #f45c5cff)",
          backgroundSize: "100%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Technical Skills
      </Typography>

      <Grid container spacing={2.5}>
        {skills.map((skill) => (
          <Grid size={{ xs: 6, sm: 4, md: 3 }} key={skill.name}>
            <InfoCard
              label={skill.name}
              sx={{
                height: "100%",
                cursor: "pointer",
              }}
              contentSx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                gap: 1.5,
                py: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "& svg": {
                    fontSize: "3rem",
                  },
                }}
              >
                {skill.icon}
              </Box>
            </InfoCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
