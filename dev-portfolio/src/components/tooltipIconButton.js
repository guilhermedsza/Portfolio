import React from "react";

import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

function TooltipIconButton({ title, icon, onClick, iconProps, tooltipProps }) {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <Tooltip title={title} {...tooltipProps}>
      <IconButton onClick={handleClick} {...iconProps}>
        {icon}
      </IconButton>
    </Tooltip>
  );
}

export default TooltipIconButton;
