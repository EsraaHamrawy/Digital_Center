import { Box, Typography, Stepper, Step, StepLabel } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import styles from "./progressBar.module.css";

const ProgressBar = ({ status, steps }) => {
  const getStepStatus = (stepNum) => {
    if (status === "pending") {
      if (stepNum === 0) return "checked";
      if (stepNum === 1) return "highlighted";
      return "disabled";
    } else if (status === "approved") {
      if (stepNum <= 1) return "checked";
      return "highlighted";
    } else if (status === "rejected" || status === "completed") {
      return "checked";
    }
  };

  const getStepIcon = (step, index) => {
    const stepStatus = getStepStatus(index);
    if (stepStatus === "checked")
      return (
        <CheckCircleIcon className={`${styles.checked} ${styles.circle}`} />
      );
    if (stepStatus === "highlighted")
      return (
        <Typography className={`${styles.highlighted} ${styles.circle}`}>
          {index + 1}
        </Typography>
      );
    return (
      <Typography className={`${styles.disabled} ${styles.circle}`}>
        {index + 1}
      </Typography>
    );
  };

  return (
    <Box className={styles.container}>
      <Stepper alternativeLabel>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              className={
                getStepStatus(index) == "checked"
                  ? styles.checkedText
                  : getStepStatus(index) == "highlighted"
                  ? styles.highlightedText
                  : getStepStatus(index) == "disabled"
                  ? styles.disabledText
                  : ""
              }
              StepIconComponent={() => getStepIcon(step, index)}
              optional={
                <Typography
                  className={
                    getStepStatus(index) == "checked"
                      ? styles.checkedSubText
                      : getStepStatus(index) == "highlighted"
                      ? styles.highlightedSubText
                      : getStepStatus(index) == "disabled"
                      ? styles.disabledSubText
                      : ""
                  }
                  variant="caption"
                >
                  {step.subLabel}
                </Typography>
              }
            >
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default ProgressBar;
