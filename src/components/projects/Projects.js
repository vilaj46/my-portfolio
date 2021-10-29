import React from "react";

import Project from "./Project";

import data from "../../data/index.js";

export default function Projects({ filterBy }) {
  const [entered, setEntered] = React.useState("");

  const onMouseEnter = (title) => {
    setEntered(title);
  };

  const onMouseLeave = () => {
    setEntered("");
  };

  return (
    <ul className="flex flex-wrap">
      {data.map((project) => {
        const { type } = project;
        if (filterBy === "All") {
          return (
            <Project
              project={project}
              key={project.title}
              entered={entered}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            />
          );
        } else {
          if (filterBy === type) {
            return (
              <Project
                project={project}
                key={project.title}
                entered={entered}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              />
            );
          } else {
            return <div key={project.title}></div>;
          }
        }
      })}
    </ul>
  );
}
