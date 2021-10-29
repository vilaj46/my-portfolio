import React from "react";
import { Link } from "gatsby";

import ProjectImage from "./ProjectImage";
import ProjectText from "./ProjectText";

export default function Project({
  project,
  entered,
  onMouseEnter,
  onMouseLeave,
}) {
  const { title, images, type, href } = project;

  const singularType = type.slice(0, type.length - 1);
  return (
    <li key={title} className="cursor-pointer relative w-3/6">
      <Link
        className="block h-full"
        to={href}
        onMouseEnter={() => onMouseEnter(title)}
        onMouseLeave={onMouseLeave}
      >
        <ProjectImage
          src={images[0].src}
          alt={images[0].alt}
          entered={entered}
          title={title}
        />
        {entered === title && <ProjectText title={title} type={singularType} />}
      </Link>
    </li>
  );
}
