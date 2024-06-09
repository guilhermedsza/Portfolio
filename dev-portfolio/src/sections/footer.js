import React from "react";

import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import GradientHoverTypography from "../components/gradientHoverTypography";
import Link from "@mui/material/Link";

function Footer({ sections, ...passThroughProps }) {
  const handleClick = (onClick) => {
    if (onClick) onClick();
  };

  return (
    <Container
      sx={(theme) => ({
        borderTop: "2px solid #acacb4",
        color: "white",
        padding: theme.spacing(3, 0),
        marginTop: "auto",
        width: "100%",
        minHeight: "100px",
      })}
      {...passThroughProps}
    >
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" spacing={1}>
          {sections &&
            sections.map((section, index) => (
              <GradientHoverTypography
                key={`${section.title}-${index}`}
                sx={{ cursor: "pointer", fontWeight: "bold" }}
                onClick={() => handleClick(section.onClick)}
                variant="body2"
              >
                {section.title}
              </GradientHoverTypography>
            ))}
        </Stack>
        <Stack direction="row" spacing={1}>
          <Link
            href="https://github.com/guilhermedsza"
            target="_blank"
            variant="body2"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/guidesouza"
            target="_blank"
            variant="body2"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:guilhermedsouza@live.com"
            target="_blank"
            variant="body2"
          >
            Email
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
}

export default Footer;
