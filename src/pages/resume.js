import React from "react";

import pdf from "../pdfs/resume.pdf";

import Container from "../components/pages/Container";

export default function resume() {
  return (
    <div>
      <embed src={pdf} type="application/pdf" width="100%" height="600px" />
    </div>
  );
}
