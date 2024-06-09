import React from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import NavBar from "./components/nav-bar/navBar";

import "./App.css";
import Intro from "./sections/intro";
import Experience from "./sections/experience";
import Projects from "./sections/projects";
import Footer from "./sections/footer";
// import Contact from "./sections/contact";

function App() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const sections = [
    { title: "About", onClick: () => scrollToSection("about") },
    { title: "Projects", onClick: () => scrollToSection("projects") },
    {
      title: "Experience",
      onClick: () => scrollToSection("experience"),
    },
    // { title: "Contact", onClick: () => scrollToSection("contact") },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        backgroundColor: "grey.50",
      }}
    >
      <Box id="main-container">
        <Box
          sx={(theme) => ({
            [theme.breakpoints.up("md")]: {
              paddingLeft: 10,
              paddingRight: 10,
            },
          })}
        >
          <NavBar sections={sections} />
          <Box sx={{ marginTop: "70px" }}></Box>
          <Stack spacing={4}>
            <Intro id="about" />
            <Projects id="projects" />
            <Experience id="experience" />
            {/* <Contact id="contact" /> */}
          </Stack>
        </Box>
        <Footer id="footer" sections={sections} />
      </Box>
    </Box>
  );
}

export default App;
