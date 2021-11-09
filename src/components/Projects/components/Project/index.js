import React from "react";
import { Link } from "gatsby";

import ProjectText from "./components/ProjectText";
import ProjectImage from "./components/ProjectImage";

export default function Project({
  project, // Project data.
  entered, // What we are currently hovering.
  onMouseEnter, // Action when hovering.
  onMouseLeave, // Action after hovering.
}) {
  const { title, images, type, href } = project;
  const singularType = type.slice(0, type.length - 1);
  return (
    <li
      key={title}
      className="cursor-pointer relative mx-12 mb-12"
      style={{ width: "37%" }}
      // w-1/3
    >
      <Link
        to={href}
        className="block h-full"
        onMouseLeave={onMouseLeave}
        onMouseEnter={() => onMouseEnter(title)}
      >
        <ProjectImage
          title={title}
          entered={entered}
          alt={images[0].alt}
          src={images[0].src}
        />
        {entered === title && <ProjectText title={title} type={singularType} />}
      </Link>
    </li>
  );
}
