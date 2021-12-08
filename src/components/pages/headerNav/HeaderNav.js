import React from "react";
import { Link } from "gatsby";

import { sortProjectsByType } from "../../../data/projects";

export default function HeaderNav({ isOpen }) {
  const websites = sortProjectsByType("Websites");
  const extensions = sortProjectsByType("Extensions");
  const applications = sortProjectsByType("Applications");
  return (
    <div
      className={`
        absolute -top-0
        justify-between
        z-20 bg-white transition duration-1000 
        ease-in-out
        w-full
      `}
    >
      {isOpen && (
        <div className="bg-blue">
          <h1
            className="ml-4 text-2xl text-white"
            style={{ fontFamily: "inconsolata" }}
          >
            <Link to="/">MyPortfolio</Link>
          </h1>
          <ul className=" top-0 flex z-30 w-full justify-around">
            <Category text="Websites" projects={websites} />
            <Category text="Extensions" projects={extensions} />
            <Category text="Applications" projects={applications} />
          </ul>
        </div>
      )}
    </div>
  );
}

function Category({ text, projects }) {
  return (
    <li className="mx-3 mt-6 text-white text-xs">
      <p className="underline mb-3">{text}</p>
      <ul>
        {projects.map((project) => (
          <li key={project.href} className="mb-6 hover:underline">
            <Link to={`/${project.href}/`}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
