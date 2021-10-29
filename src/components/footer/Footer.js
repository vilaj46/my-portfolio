import React from "react";

import linkedIn from "../../images/icons/linkedIn.png";
import github from "../../images/icons/github.png";

import linkedInHover from "../../images/icons/linkedInHover.png";
import githubHover from "../../images/icons/githubHover.png";

import FooterIcon from "./FooterIcon";

export default function Footer() {
  return (
    <div className="mt-24 flex justify-center">
      <FooterIcon
        src={linkedIn}
        alt="Linked In"
        hover={linkedInHover}
        href="https://www.linkedin.com/in/julian-vila-2ab9791bb/"
      />
      <FooterIcon
        src={github}
        alt="Github"
        hover={githubHover}
        href="https://github.com/vilaj46"
      />
    </div>
  );
}
