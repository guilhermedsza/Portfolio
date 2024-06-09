import React from "react";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Footer = () => {
  return (
    <Container
      sx={(theme) => ({
        backgroundColor: theme.palette.primary.main,
        color: "white",
        padding: theme.spacing(3, 2),
        marginTop: "auto",
        width: "100%",
      })}
    >
      <Typography variant="body1" align="center">
        &copy; {new Date().getFullYear()} Your Company Name. All rights
        reserved.
      </Typography>
      <Typography variant="body2" align="center">
        <Link color="inherit" href="https://www.example.com/terms">
          Terms of Service
        </Link>{" "}
        |{" "}
        <Link color="inherit" href="https://www.example.com/privacy">
          Privacy Policy
        </Link>
      </Typography>
    </Container>
  );
};

export default Footer;
