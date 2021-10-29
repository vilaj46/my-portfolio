import * as React from "react";

// Components
import Projects from "../components/projects/Projects";
import ProjectsNavBar from "../components/projectsNavBar/ProjectsNavBar";
import Container from "../components/pages/Container";
import H2 from "../components/pages/H2";
import H3 from "../components/pages/H3";

/**
 * Template: https://bootstrapmade.com/demo/MyPortfolio/
 * Footer: https://codepen.io/scanfcode/pen/MEZPNd
 */

/**
 * Animations
 *
 * Fade Up: https://codepen.io/themechills/pen/dMamgG
 */

// Add backend github link on project pages.

// Synchronize image width and height.
// Social Links - linked in, mail, github
// Header
// About me section
// Resume

const IndexPage = () => {
  const [filterBy, setFilterBy] = React.useState("All");
  return (
    <main>
      <Container>
        <H2>Hey, I'm Julian Vila</H2>
        <H3>Freelance Web Developer & Co-Owner of Franklin Court Press</H3>
        <ProjectsNavBar filterBy={filterBy} setFilterBy={setFilterBy} />
        <Projects filterBy={filterBy} />
      </Container>
    </main>
  );
};

export default IndexPage;
