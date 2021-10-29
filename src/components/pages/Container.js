import React from "react";
import { Link } from "gatsby";

import Footer from "../footer/Footer";

export default function Container({ children }) {
  return (
    <div className="container mx-auto m-12 text-primary">
      <h1 className="mb-12 text-2xl">
        <Link to="/">MyPortfolio</Link>
      </h1>
      <div className="animate-fadeUp">{children}</div>
      <Footer />
    </div>
  );
}
