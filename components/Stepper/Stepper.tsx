import * as React from "react";
//UI Components
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = ["1", "2"];

const StepperComponent = (props: { step: number }) => {
  const { step } = props;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: 3,
      }}
    >
      <Stepper
        activeStep={step}
        alternativeLabel
        sx={{ height: "100%", width: "50%" }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default StepperComponent;
