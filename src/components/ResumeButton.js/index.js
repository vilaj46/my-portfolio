import React, { useState } from "react";

import resume from "../../images/icons/resume.png";

function ResumeButton({ invert = false }) {
  const [hovering, setHovering] = useState(false);

  const enter = () => setHovering(true);
  const leave = () => setHovering(false);

  const bgColor = invert ? "#ffffff" : "#333";

  const boxShadow = hovering ? `1px 1px 3px 1px ${bgColor}` : "";

  const padding = hovering ? "px-3" : "";
  return (
    <a
      //   type="button"
      href="/resume"
      target="_blank"
      rel="norefferer"
      onMouseEnter={enter}
      onMouseLeave={leave}
      className={`${padding} py-1 text-base ml-full flex`}
      style={{
        boxShadow,
        fontFamily: "raleway",
      }}
    >
      <img src={resume} alt="Resume Icon" width="25" height="25" />
      <span style={{ paddingTop: "3px" }}>Resume</span>
    </a>
  );
}

export default ResumeButton;
