import React from "react";

import NavItem from "./components/NavItem";

export default function ProjectsNavBar({ filterBy, setFilterBy }) {
  const onClick = (text) => {
    setFilterBy(text);
  };

  return (
    <ul className="flex mb-6" style={{ fontFamily: "inconsolata" }}>
      <NavItem text="All" filterBy={filterBy} onClick={onClick} />
      <NavItem text="Websites" filterBy={filterBy} onClick={onClick} />
      <NavItem text="Extensions" filterBy={filterBy} onClick={onClick} />
      <NavItem text="Applications" filterBy={filterBy} onClick={onClick} />
    </ul>
  );
}
