import React from "react";

import Container from "./Container";
import H2 from "./H2";
import H3 from "./H3";
import LiveSite from "./LiveSite";
import GitHubLink from "./GitHubLink";
import Technologies from "./Technologies";
import ProjectPageImage from "./ProjectPageImage";

import data from "../../data";

export default function ProjectPage({ index }) {
  const project = data[index];
  const { tech, info, info2, url, repo, images, details } = project;
  return (
    <Container>
      <H2>{project.title}</H2>
      <H3>{info}</H3>
      <div className="flex justify-between">
        <ProjectPageImage images={images} />
        <div className="w-3/12">
          <div className="mb-3">
            <LiveSite url={url} />
            <GitHubLink repo={repo} />
          </div>
          <p className="mb-6">{info2}</p>
          <Technologies tech={tech} />
        </div>
      </div>
      <p className="mt-12">{details}</p>
    </Container>
  );
}
