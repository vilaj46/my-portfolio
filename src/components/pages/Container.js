import React from "react";
import { Link } from "gatsby";
import Hamburger from "hamburger-react";

import Footer from "../footer/Footer";
import HeaderNav from "./headerNav/HeaderNav";

export default function Container({ children }) {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div className="container mx-auto m-12 text-primary relative">
      <div className="flex">
        <div
          className={`
        flex
        justify-between
        w-full
        ${isOpen ? "absolute" : "static"}`}
        >
          <h1 className="mb-12 text-2xl" style={{ fontFamily: "inconsolata" }}>
            <Link to="/">MyPortfolio</Link>
          </h1>
          <HeaderNav isOpen={isOpen} />
        </div>
        <div className="ml-auto absolute right-0 z-50">
          {!isOpen && <Hamburger toggled={isOpen} toggle={setOpen} />}
          {isOpen && (
            <Hamburger toggled={isOpen} toggle={setOpen} color="white" />
          )}
        </div>
      </div>

      <div
        className={`
        animate-fadeUp
        ${isOpen ? "container mx-auto" : ""}
      `}
      >
        {isOpen && (
          <h1 className="w-0 mb-12 text-2xl opacity-0">
            <Link to="/">MyPortfolio</Link>
          </h1>
        )}
        {children}
      </div>
      <Footer />
    </div>
  );
}
