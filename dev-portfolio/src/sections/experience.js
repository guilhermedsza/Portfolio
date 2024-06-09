import React from "react";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import grey from "@mui/material/colors/grey";

const allExperiences = [
  {
    companyName: "MCSnet",
    positionName: "Web Developer",
    startDate: "May 2022",
    endDate: undefined,
    src: "../assets/imgs/mcsnet_logo.png",
  },
  {
    companyName: "MCSnet",
    positionName: "Frontend Developer",
    startDate: "Oct 2019",
    endDate: "May 2022",
    src: "../assets/imgs/mcsnet_logo.png",
  },
  {
    companyName: "ExxonMobil",
    positionName: "Full Stack Software Developer",
    startDate: "Jun 2021",
    endDate: "Nov 2021",
    src: "../assets/imgs/exxonmobil_logo.png",
  },
  {
    companyName: "ExxonMobil",
    positionName: "Full Stack Software Developer",
    startDate: "Oct 2019",
    endDate: "Jan 2021",
    src: "../assets/imgs/exxonmobil_logo.png",
  },
  {
    companyName: "ExxonMobil",
    positionName: "GBC Management Intern",
    startDate: "Jan 2018",
    endDate: "Oct 2019",
    src: "https://download.logo.wine/logo/ExxonMobil/ExxonMobil-Logo.wine.png",
  },
];

function Experience({ ...passThroughProps }) {
  return (
    <Stack {...passThroughProps}>
      <Typography variant="h4" fontWeight="bold">
        Work Experience
      </Typography>
      <Timeline position="alternate">
        {allExperiences.map((experience, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent>
              <Typography fontWeight="bold" sx={{ color: grey[800] }}>
                {experience.positionName}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontStyle: "italic", color: grey[400] }}
              >
                {experience.companyName}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot></TimelineDot>
              {index + 1 !== allExperiences.length && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="body2" sx={{ color: grey[800] }}>
                {experience.startDate} - {experience.endDate || "Present"}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Stack>
  );
}

export default Experience;
