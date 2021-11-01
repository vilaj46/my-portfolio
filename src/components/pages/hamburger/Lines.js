import React from "react";

export default function Lines({ opened, setOpened }) {
  const onClick = () => {
    setOpened(!opened);
  };

  return (
    <button
      className={`${opened ? "w-1/12" : "w-full"} ${
        opened ? "absolute right-0" : ""
      } ${opened ? "absolute -top-2" : ""}`}
      onClick={onClick}
    >
      <LineOne opened={opened} />
      <LineTwo opened={opened} />
      <LineThree opened={opened} />
    </button>
  );
}

function LineOne({ opened }) {
  return (
    <span
      className={`mt-1 m-auto mb-0 bg-primary w-6/12 h-1 block relative ${
        opened ? "opacity-0" : "opacity-100"
      } ${
        opened ? "transform rotate-45" : ""
      } .rounded-sm transition-all duration-300`}
    ></span>
  );
}

function LineTwo({ opened }) {
  return (
    <span
      className={`mt-1 m-auto mb-0 bg-primary w-6/12 h-1 block relative opacity-100 .rounded-sm transition-all duration-300 ${
        opened ? "transform rotate-45" : "rotate-0"
      }`}
      style={{
        top: `${opened ? "7px" : ""}`,
      }}
    ></span>
  );
}

function LineThree({ opened }) {
  return (
    <span
      className={`mt-1 m-auto mb-1 bg-primary w-6/12 h-1 block relative opacity-100 .rounded-sm transition-all duration-300 ${
        opened ? "transform -rotate-45" : "rotate-0"
      }`}
    ></span>
  );
}
