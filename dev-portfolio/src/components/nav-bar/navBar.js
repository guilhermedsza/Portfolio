import React from "react";
import Stack from "@mui/material/Stack";
import GradientHoverTypography from "../gradientHoverTypography";

function NavBar({ sections }) {
  const handleClick = (onClick) => {
    if (onClick) onClick();
  };
  return (
    <Stack
      direction="row"
      spacing={3}
      position="fixed"
      sx={{
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        marginTop: 1,
        borderRadius: 5,
        border: "1px solid rgb(244, 244, 245)",
        padding: "10px 20px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, .1)",
        backgroundColor: "white",
      }}
    >
      {sections &&
        sections.map((section, index) => (
          <GradientHoverTypography
            key={`${section.title}-${index}`}
            sx={{ cursor: "pointer", fontWeight: "bold" }}
            onClick={() => handleClick(section.onClick)}
          >
            {section.title}
          </GradientHoverTypography>
        ))}
    </Stack>
  );
}

export default NavBar;
