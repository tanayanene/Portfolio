import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import CircleIcon from "@mui/icons-material/Circle";
import InfoCard from "../../components/card/Card";
import { colors } from "../../theme/colors";

// const steps = [
//   {
//     label: "Select campaign settings",
//     description: `For each ad campaign that you create, you can control how much
//     you're willing to spend on clicks and conversions, which networks
//     and geographical locations you want your ads to show on, and more.`,
//   },
//   {
//     label: "Create an ad group",
//     description:
//       "An ad group contains one or more ads which target a shared set of keywords.",
//   },
//   {
//     label: "Create an ad",
//     description: `Try out different ad text to see what brings in the most customers,
//     and learn how to enhance your ads using features like ad extensions.`,
//   },
//   {
//     label: "",
//     description: "",
//   },
// ];


const steps = [
  {
    designation: "Associate Consultant",
    label: "Emergys Solutions | Associate Consultant",
    description: `Worked on modern React.js applications with focus on scalability, maintainability, and performance optimization. Integrated GraphQL APIs built on C#, developed real-time features using SignalR, and created data-driven dashboards using Highcharts.`,
  },

  {
    designation: "Senior Software Engineer",
    label: "Emergys Solutions | Senior Software Engineer",
    description: `Built responsive user interfaces from Figma designs using React.js and CoreUI. Managed application state using Redux, implemented theme switching, integrated Node.js APIs, and developed interactive charts using AmCharts while collaborating in agile teams.`,
  },

  {
    designation: "Frontend Intern",
    label: "Emergys Solutions | Frontend Intern",
    description: `Completed hands-on training in HTML, CSS, JavaScript, and React.js. Developed reusable UI components, integrated APIs, and followed clean coding and component-based architecture practices.`,
  },

  {
    designation: "React.js Intern",
    label: "Athena Automation | React.js Intern",
    description: `Assisted in building frontend components using React.js, handled component state and logic, and worked on fixing UI-related issues within the application.`,
  },

  {
    label: "",
    description: "",
  },
];

const VerticalStepper = () => {
  return (
    <Box>
      <Stepper orientation="vertical" activeStep={steps.length}>
        {steps.map((step, index) => (
          <Step key={step.label} expanded>
            <StepLabel
              slots={{
                stepIcon:
                  index === steps.length - 1
                    ? () => null // hide icon for last step
                    : () => <CircleIcon />,
              }}
              sx={{
                "& .MuiSvgIcon-root": {
                  color: colors.BRICK_RED,
                },
              }}
            >
              {step.designation}
            </StepLabel>

            <StepContent>
              {step.label && (
                <InfoCard label={step.label} content={step.description} />
              )}
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default VerticalStepper;
