import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function Projects({ ...passThroughProps }) {
  return (
    <Stack {...passThroughProps}>
      <Typography variant="h4" fontWeight="bold">
        Projects
      </Typography>
    </Stack>
  );
}

export default Projects;
