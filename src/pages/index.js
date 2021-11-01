// eslint-disable-next-line react-hooks/exhaustive-deps

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
 * Example: https://davidsumner.co.uk/
 */

/**
 * Animations
 *
 * Fade Up: https://codepen.io/themechills/pen/dMamgG
 */

// Synchronize image width and height.

// Add About me page and resume in the header.
// About me section
// Resume

const IndexPage = ({ location }) => {
  const [filterBy, setFilterBy] = React.useState("All");

  return <App filterBy={filterBy} setFilterBy={setFilterBy} path="/" />;
};

const App = ({ filterBy, setFilterBy }) => {
  return (
    <main>
      <Container>
        <H2>Hey, I'm Julian Vila</H2>
        <H3>Freelance Web Developer & Co-Owner of Franklin Court Press</H3>
        <ProjectsNavBar filterBy={filterBy} setFilterBy={setFilterBy} />
        <Projects filterBy={filterBy} />
        <div>About Me</div>
        <a href="/resume" target="_blank" rel="norefferer">
          RESUME
        </a>
      </Container>
    </main>
  );
};

export default IndexPage;
