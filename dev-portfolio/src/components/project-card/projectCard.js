import React, { useState, useRef, useEffect } from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import LinkIcon from "@mui/icons-material/Link";
import Stack from "@mui/material/Stack";
import GradientHoverTypography from "../gradientHoverTypography";

function TextTruncate({ children, customMaxHeight }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const textRef = useRef(null);
  const text = children;
  const maxHeight = customMaxHeight || 140;

  useEffect(() => {
    if (textRef.current.clientHeight > maxHeight) {
      setIsExpanded(false);
    }
  }, [text, maxHeight]);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <Typography
        ref={textRef}
        variant="body1"
        component="div"
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxHeight: isExpanded ? "none" : `${maxHeight}px`,
        }}
      >
        {`${text}`}
      </Typography>
      <GradientHoverTypography
        onClick={toggleExpansion}
        variant="body2"
        color="primary"
        sx={{ cursor: "pointer" }}
      >
        {isExpanded ? "Show less" : "... Show more"}
      </GradientHoverTypography>
    </>
  );
}

function ProjectCard({ data }) {
  const handleClick = () => {
    if (data.src) window.open(data.src, "_blank");
  };
  return (
    <Card
      sx={{
        boxShadow: "none",
        height: "100%",
      }}
    >
      <CardHeader avatar={<Avatar src={data.logo} />} />
      <CardContent>
        <Typography fontWeight="bold">{data.title}</Typography>
        <TextTruncate variant="body2">{data.description}</TextTruncate>
      </CardContent>
      <CardActions>
        {data.src && (
          <Stack
            direction="row"
            alignItems="Center"
            spacing={2}
            onClick={handleClick}
            sx={{
              "&:hover": data.src && {
                cursor: "pointer",
                color: "#74C365",
                // backgroundColor: "rgb(244, 244, 245)",
              },
            }}
          >
            <LinkIcon />
            <Typography variant="subtitle2">View Project</Typography>
          </Stack>
        )}
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
