import React from "react";

import Box from "@mui/material/Box";
import NavBar from "./components/nav-bar/navBar";

import "./App.css";
import Intro from "./sections/intro";

function App() {
  const sections = ["About", "Projects", "Contact"];

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
      <Box sx={{}} id="main-container">
        <NavBar sections={sections} />
        <Box sx={{ marginTop: "70px" }}></Box>
        <Intro />
        <main>
          <h1>Main Content</h1>
          <p>This is the main content area.</p>
        </main>
      </Box>
    </Box>
  );
}

export default App;
