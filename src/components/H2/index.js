import React from "react";

export default function H2({ children }) {
  return (
    <h2
      className="text-4xl"
      style={{
        fontFamily: "raleway",
      }}
    >
      {children}
    </h2>
  );
}
