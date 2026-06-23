import { Card, CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import type { ReactNode } from "react";
import type { SxProps, Theme } from "@mui/material/styles";
import { colors } from "../../theme/colors";

type InfoCardProps = {
  label: string;
  content?: ReactNode;
  children?: ReactNode;
  sx?: SxProps<Theme>;
  contentSx?: SxProps<Theme>;
};

const InfoCard = (props: InfoCardProps) => {
  const { label, content, children, sx, contentSx } = props;
  const muiTheme = useTheme();

  return (
    <Card
      sx={{
        boxShadow: 3,
        backgroundColor:
          muiTheme.palette.mode === "light"
            ? colors.CARD_BG_LIGHT
            : colors.CARD_BG_DARK,
        border: `1px solid ${
          muiTheme.palette.mode === "light"
            ? colors.NAV_BORDER_LIGHT
            : colors.NAV_BORDER_DARK
        }`,
        borderRadius: "16px",
        backdropFilter: "blur(12px)",
        transition: "box-shadow 0.5s ease, transform 0.5s ease",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: `0 0 10px 1px ${
            muiTheme.palette.mode === "light"
              ? colors.NAV_HOVER_LIGHT
              : colors.NAV_HOVER_DARK
          }`,
        },
        ...sx,
      }}
    >
      <CardContent
        sx={{
          "&:last-child": {
            pb: 4,
          },
          ...contentSx,
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            display: "inline-block",
            background:
              "linear-gradient(to right, #1094d6ff, #992bbe, #e80c7a, #f45c5cff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {label}
        </Typography>

        {content ? <Typography variant="body2">{content}</Typography> : null}

        {children}
      </CardContent>
    </Card>
  );
};

export default InfoCard;
