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
      justify-between
      z-40 bg-white transition duration-1000 
      ease-in-out
      `}
      style={{ width: "100%" }}
    >
      {isOpen && (
        <ul className="bg-blue top-0 flex z-30 w-full">
          <Category text="Websites" projects={websites} />
          <Category text="Extensions" projects={extensions} />
          <Category text="Applications" projects={applications} />
        </ul>
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
