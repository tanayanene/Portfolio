import { Box, Button, Link, Stack, TextField, Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import InfoCard from "../../components/card/Card";
import { colors } from "../../theme/colors";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const contactMethods = [
  {
    icon: EmailOutlinedIcon,
    label: "Email",
    value: "tanayanene09@gmail.com",
    href: "mailto:tanayanene09@gmail.com",
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/tanayanene09",
    href: "https://www.linkedin.com/in/tanayanene09",
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    value: "github.com/tanayanene",
    href: "https://github.com/tanayanene",
  },
];

const Contact = () => {
  const muiTheme = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const nameRegex =
      /^[A-Za-z]+(?:['-]?[A-Za-z]+)*\s+[A-Za-z]+(?:['-]?[A-Za-z]+)*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      return "Full name is required.";
    }

    if (!nameRegex.test(formData.name.trim())) {
      return "Please enter your first and last name.";
    }

    if (!formData.email.trim()) {
      return "Email is required.";
    }

    if (!emailRegex.test(formData.email.trim())) {
      return "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      return "Message is required.";
    }

    return null;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationError = validateForm();

    if (validationError) {
      setSnackbar({
        open: true,
        message: validationError,
        severity: "error",
      });
      return;
    }

    try {
      setLoading(true);

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setSnackbar({
        open: true,
        message: "Message sent successfully!",
        severity: "success",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setSnackbar({
        open: true,
        message: "Failed to send message.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: 3, md: 5 },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "2.25rem", md: "3.5rem" },
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        Contact Me
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "0.95fr 1.05fr" },
          gap: { xs: 4, md: 6 },
          alignItems: "start",
        }}
      >
        <Box
          sx={{
            pt: { xs: 0, md: 4 },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 2,
            }}
          >
            Get In Touch
          </Typography>

          <Typography
            sx={{
              fontSize: "1.1rem",
              lineHeight: 1.8,
              maxWidth: "34rem",
            }}
          >
            Feel free to contact me for any work or suggestions below.
          </Typography>

          <Stack spacing={3.25} sx={{ mt: 5 }}>
            {contactMethods.map((method) => {
              const Icon = method.icon;

              return (
                <Box
                  key={method.label}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: "14px",
                      display: "grid",
                      placeItems: "center",
                      border: `1px solid ${colors.NAV_BORDER_DARK}`,
                      color: colors.BRICK_RED,
                      flexShrink: 0,
                    }}
                  >
                    <Icon fontSize="small" />
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        mb: 0.5,
                      }}
                    >
                      {method.label}
                    </Typography>
                    <Link
                      href={method.href}
                      target={
                        method.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        method.href.startsWith("http")
                          ? "noreferrer"
                          : undefined
                      }
                      underline="none"
                      sx={{
                        color:
                          muiTheme.palette.mode === "light"
                            ? colors.DARK_GRAY
                            : colors.LIGHT_GRAY,
                        fontSize: { xs: "0.95rem", md: "1.05rem" },
                        wordBreak: "break-word",
                        transition: "color 0.25s ease",
                        "&:hover": {
                          color: colors.BRICK_RED,
                        },
                      }}
                    >
                      {method.value}
                    </Link>
                  </Box>
                </Box>
              );
            })}
          </Stack>
        </Box>

        <InfoCard label="Send a Message">
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2.5,
              mt: 1,
            }}
          >
            <Box>
              <Typography
                sx={{
                  mb: 1,
                  fontWeight: 600,
                }}
              >
                Name
              </Typography>
              <TextField
                fullWidth
                placeholder="John Doe"
                variant="outlined"
                name="name"
                value={formData.name}
                onChange={handleChange}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    "& fieldset": {
                      borderColor: colors.NAV_BORDER_DARK,
                    },
                    "&:hover fieldset": {
                      borderColor: colors.NAV_HOVER_DARK,
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: colors.BRICK_RED,
                    },
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#99a2a8",
                    opacity: 1,
                  },
                }}
              />
            </Box>

            <Box>
              <Typography
                sx={{
                  mb: 1,
                  fontWeight: 600,
                }}
              >
                Email
              </Typography>
              <TextField
                fullWidth
                placeholder="john.doe@example.com"
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleChange}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    "& fieldset": {
                      borderColor: colors.NAV_BORDER_DARK,
                    },
                    "&:hover fieldset": {
                      borderColor: colors.NAV_HOVER_DARK,
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: colors.BRICK_RED,
                    },
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#99a2a8",
                    opacity: 1,
                  },
                }}
              />
            </Box>

            <Box>
              <Typography
                sx={{
                  mb: 1,
                  fontWeight: 600,
                }}
              >
                Message
              </Typography>
              <TextField
                fullWidth
                multiline
                minRows={4}
                maxRows={4}
                placeholder="Your message"
                variant="outlined"
                name="message"
                value={formData.message}
                onChange={handleChange}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    alignItems: "flex-start",
                    "& fieldset": {
                      borderColor: colors.NAV_BORDER_DARK,
                    },
                    "&:hover fieldset": {
                      borderColor: colors.NAV_HOVER_DARK,
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: colors.BRICK_RED,
                    },
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#99a2a8",
                    opacity: 1,
                  },
                  "& .MuiInputBase-inputMultiline": {
                    overflowY: "auto",
                  },
                }}
              />
            </Box>

            <Button
              type="submit"
              startIcon={<SendRoundedIcon />}
              disabled={loading}
              sx={{
                mt: 1,
                py: 1.8,
                borderRadius: 2,
                fontWeight: 700,
                fontSize: "1rem",
                textTransform: "none",
                color: "#ffffff",
                background: `linear-gradient(90deg, ${colors.BRICK_RED}, #d95f4e)`,
                boxShadow: "none",
                "&:hover": {
                  background: `linear-gradient(90deg, #c35040, ${colors.BRICK_RED})`,
                  boxShadow: "0 0 12px rgba(170, 57, 45, 0.38)",
                },
              }}
            >
              Send Message
            </Button>
          </Box>
        </InfoCard>
      </Box>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() =>
          setSnackbar((prev) => ({
            ...prev,
            open: false,
          }))
        }
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Alert
          severity={snackbar.severity}
          variant="filled"
          onClose={() =>
            setSnackbar((prev) => ({
              ...prev,
              open: false,
            }))
          }
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
