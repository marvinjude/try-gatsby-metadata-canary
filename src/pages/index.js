import React, { Fragment } from "react";
import { Link } from "gatsby";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

export function head(props) {
  return (
    <Fragment>
      <title>Home</title>
      <link rel="canonical" href="https://www.example.com/about" />
      <link
        rel="alternate"
        hrefLang="en"
        href="https://www.example.com/about"
      />
      <link
        rel="alternate"
        hrefLang="es"
        href="https://www.example.com/es/about"
      />
    </Fragment>
  );
}

const IndexPage = (props) => {
  return (
    <main style={pageStyles}>
      Home Page <Link to="/hey">hey</Link>
    </main>
  );
};

export default IndexPage;
