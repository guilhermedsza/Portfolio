import React from "react";

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ProjectCard from "../components/project-card/projectCard";

const projects = [
  {
    title: "Interactive Map Application",
    description:
      "I led the development of an interactive map application designed to visualize and analyze data for a company's customers. The map, built using ReactJS with DeckGL for rendering and Mapbox for mapping, displays the locations of the company's customers and establishes links between them where necessary. The application offers a range of functionalities, including: customer clustering, data filtering, custom data layers, and dynamic updates",
    logo: "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-512.png",
  },
  {
    title: "Web Scraping and Automated Form-Filling Script",
    description:
      "I developed a sophisticated Python script designed for web scraping and automated form filling. The script navigates through various web pages based on predefined criteria, extracting relevant data and automatically populating online forms. It uses information stored in an Excel sheet to fill in the forms accurately. If the required information is not found in the sheet, the script prompts for user input to ensure complete and precise form submission. Additionally, the script is capable of handling Captchas, ensuring uninterrupted automation.",
    src: "https://github.com/guilhermedsza/web-scraper-and-form-filler",
    logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
  },
  {
    title: "Workout Tracking App",
    description:
      "I am leading the front-end development of a comprehensive workout tracking app tailored for both personal trainers and fitness enthusiasts. The app facilitates user authentication, allowing seamless sign-up and sign-in processes. Users can effortlessly track their fitness journey by viewing their past and current workout splits, logging detailed workout sessions, and saving critical data such as series, weights, and reps. This data is then compared to past workouts, providing valuable insights into their progress over time. The backend infrastructure, built with Java and a NoSQL PostgreSQL database, supports the app’s robust data handling and performance.",
    src: "https://github.com/guilhermedsza/PersonalApp",
    logo: "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-512.png",
  },
  {
    title: "Scheduling Platform",
    description:
      "I developed the front end of a scheduling platform, designed to manage and book appointments through an interactive calendar. Users can check the availability of dates and times, and schedule their appointments seamlessly. The application utilizes API calls to interact with the backend services.",
    logo: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/21_Angular_logo_logos-512.png",
  },
];

function Projects({ ...passThroughProps }) {
  return (
    <Stack {...passThroughProps}>
      <Typography variant="h4" fontWeight="bold" mb={4}>
        Projects
      </Typography>
      <Grid container spacing={2}>
        {projects.map((project, key) => (
          <Grid item xs={12} md={4} key={key}>
            <ProjectCard data={project} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

export default Projects;
