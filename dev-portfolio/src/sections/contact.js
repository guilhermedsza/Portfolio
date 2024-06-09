import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function Contact({ ...passThroughProps }) {
  return (
    <Stack {...passThroughProps}>
      <Typography variant="h4" fontWeight="bold">
        Contact Me
      </Typography>
    </Stack>
  );
}

export default Contact;
