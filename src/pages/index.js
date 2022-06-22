import React, { Fragment } from "react";
import { Link } from "gatsby";

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "100vh",
};

const headingStyles = {
  fontSize: "5rem",
  fontWeight: "bold",
  textAlign: "center",
  margin: "0",
};

const linksStyles = {
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
  alignItems: "center",
  margin: "0",
  padding: "1rem",
};

export function head(props) {
  return (
    <Fragment>
      <title>Home</title>
    </Fragment>
  );
}

const IndexPage = (props) => {
  return (
    <main style={pageStyles}>
      <img
        alt="gatsby logo"
        style={{ height: "5rem", width: "5rem" }}
        src="https://www.gatsbyjs.com/Gatsby-Monogram.svg"
      ></img>
      <h1 style={headingStyles}>
        <span
          style={{
            color: "#542c85",
          }}
        >
          Gatsby
        </span>
        <span
          style={{
            color: "#f67300",
          }}
        >
          Places
        </span>
      </h1>
      <div style={linksStyles}>
        <Link to="/sales">Sales</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/careers">Careers</Link>
      </div>
    </main>
  );
};

export default IndexPage;
