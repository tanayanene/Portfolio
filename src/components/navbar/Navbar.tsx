// TODO: Create Navbar component according to MUI, separate the css and mui sx / styled properly.

import styles from "./Navbar.module.scss";
import NavbarIcon from "../../assets/navbar_icon.svg";
import { Button, IconButton, List, ListItem } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link } from "react-scroll";
import { useTheme } from "@mui/material";
import { colors } from "../../theme/colors";

type ThemeMode = "light" | "dark";

type ThemeProps = {
  theme: ThemeMode;
  setTheme: React.Dispatch<React.SetStateAction<ThemeMode>>;
};

const componentMap = [
  { page: "About", linkTo: "about" },
  { page: "Experience", linkTo: "experience" },
  { page: "Skills", linkTo: "skills" },
  { page: "Contact", linkTo: "contact" },
];

const Navbar = (props: ThemeProps) => {
  const { setTheme } = props;
  const muiTheme = useTheme();
  const themeMode = muiTheme.palette.mode;

  return (
    <div
      className={styles.nav__container}
      style={
        {
          "--nav-background":
            themeMode === "light" ? colors.NAV_BG_LIGHT : colors.NAV_BG_DARK,
          "--box-shadow":
            themeMode === "light"
              ? colors.NAV_HOVER_LIGHT
              : colors.NAV_HOVER_DARK,
          "--brick-red": colors.BRICK_RED,
          "--nav-border":
            themeMode === "light"
              ? colors.NAV_BORDER_LIGHT
              : colors.NAV_BORDER_DARK,
        } as React.CSSProperties
      }
    >
      <div className={styles.nav__left}>
        <img className={styles.nav__icon} src={NavbarIcon} alt="Nav icon" />
        <div>Tanaya Nene</div>
      </div>
      <List className={styles.nav__right}>
        {componentMap.map((navInfo) => {
          return (
            <ListItem key={navInfo.linkTo}>
              <Link
                to={navInfo.linkTo}
                smooth={true}
                duration={500}
                offset={-80}
              >
                {navInfo.page}
              </Link>
            </ListItem>
          );
        })}
        <div>
          <Button
            sx={{
              color: colors.BRICK_RED,
              borderColor: colors.BRICK_RED,
            }}
            variant="outlined"
            endIcon={<ArrowDownwardIcon />}
            component="a"
            href="public/Resume - Tanaya Nene.pdf"
            download="Resume.pdf"
          >
            RESUME
          </Button>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton
            onClick={() => {
              setTheme((prev) => (prev === "dark" ? "light" : "dark"));
            }}
          >
            {themeMode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </div>
      </List>
    </div>
  );
};

export default Navbar;
