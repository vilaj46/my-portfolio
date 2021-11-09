import React from "react";

import Hr from "./components/Hr";

export default function NavItem({ text, filterBy, onClick }) {
  const [focused, setFocused] = React.useState(false);

  const onMouseEnter = () => {
    setFocused(true);
  };

  const onMouseLeave = () => {
    setFocused(false);
  };

  const showHR = filterBy === text || focused === true;

  return (
    <li className="mr-6">
      <button
        className="mb-1"
        onClick={() => onClick(text)}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onKeyUp={onMouseEnter}
        onKeyDown={onMouseLeave}
      >
        {text}
      </button>
      {showHR && <Hr />}
    </li>
  );
}
