import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TooltipIconButton from "../components/tooltipIconButton";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function Intro() {
  const icons = [
    {
      title: "Github",
      icon: <GitHubIcon />,
      onClick: () => window.open("https://github.com/guilhermedsza", "_blank"),
    },
    {
      title: "LinkedIn",
      icon: <LinkedInIcon />,
      onClick: () =>
        window.open("https://linkedin.com/in/guidesouza", "_blank"),
    },
    {
      title: "E-mail",
      icon: <EmailIcon />,
      onClick: () => window.open("mailto:guilhermedsouza@live.com", "_blank"),
    },
  ];

  return (
    <Stack>
      <Typography>Intro</Typography>
      <Stack direction="row">
        {icons.map((icon, key) => (
          <TooltipIconButton
            icon={icon.icon}
            title={icon.title}
            onClick={icon.onClick}
            key={key}
          />
        ))}
      </Stack>
    </Stack>
  );
}

export default Intro;
