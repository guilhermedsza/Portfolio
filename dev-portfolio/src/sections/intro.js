import React from "react";

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TooltipIconButton from "../components/tooltipIconButton";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const icons = [
  {
    title: "Github",
    icon: <GitHubIcon />,
    onClick: () => window.open("https://github.com/guilhermedsza", "_blank"),
    iconProps: { sx: { color: "black" } },
  },
  {
    title: "LinkedIn",
    icon: <LinkedInIcon />,
    onClick: () => window.open("https://linkedin.com/in/guidesouza", "_blank"),
    iconProps: { sx: { color: "rgb(0, 119, 181)" } },
  },
  {
    title: "E-mail",
    icon: <EmailIcon />,
    onClick: () => window.open("mailto:guilhermedsouza@live.com", "_blank"),
    iconProps: { sx: { color: "rgb(36,158,228)" } },
  },
];

function Intro({ ...passThroughProps }) {
  return (
    <Grid container {...passThroughProps}>
      <Grid item xs={12}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Stack spacing={4}>
              <Typography variant="h3" fontWeight="bold">
                Full-stack web and mobile app developer.
              </Typography>
              <Typography>
                Hi, I'm <strong>Guilherme</strong> and I'm an experienced
                Software Engineer with a strong background in full stack
                development, specializing in ReactJS and PHP. With 6 years of
                hands-on experience, I have a proven track record of delivering
                high-quality, user-friendly web applications. My expertise lies
                in building responsive and interactive user interfaces,
                optimizing application performance, and collaborating
                effectively with cross-functional teams. I am passionate about
                staying updated with the latest technologies and trends in web
                development, ensuring the delivery of modern and innovative
                solutions.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4} sx={{ overflow: "hidden" }}>
            {/* <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgByBT5IiAT_a2x9pUVb4VMoOrlzHH7Jrzj-HB5jzHlR4lNLMS"
              alt="dog"
            /> */}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        {icons.map((icon, key) => (
          <TooltipIconButton key={key} {...icon} />
        ))}
      </Grid>
    </Grid>
  );
}

export default Intro;
