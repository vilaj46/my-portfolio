import React from "react";
import { Link } from "gatsby";

import Lines from "./Lines";

export default function Hamburger() {
  const [opened, setOpened] = React.useState(false);
  return (
    <div
      className={`
      ml-auto 
      ${opened ? "w-full" : "w-1/12"} 
      z-10 bg-white transition duration-1000 ease-in-out h-full relative`}
    >
      <Lines opened={opened} setOpened={setOpened} />
      <ul className="ml-4 flex">
        <Item text="About Me" opened={opened} to={"/about-me"} />
        <Item text="Resume" opened={opened} to={"/resume"} />
      </ul>
    </div>
  );
}

function Item({ text, opened, to }) {
  return (
    <li>
      <Link
        className={`${
          opened ? "transition-all duration-1000" : "duration-0"
        } ease-in-out ${opened ? "opacity-100" : "opacity-0"}`}
        to={to}
        state={{
          type: text,
        }}
        replace
      >
        {text}
      </Link>
    </li>
  );
}
