import styled from "@mui/system/styled";
import Typography from "@mui/material/Typography";

const GradientHoverTypography = styled(Typography)(({ theme }) => {
  //   console.log(theme);
  //#2F3C7E, #FBEAEB
  return {
    transition: "color 0.5s ease",
    "&:hover": {
      color: "lightblue",
    },
  };
});

export default GradientHoverTypography;
