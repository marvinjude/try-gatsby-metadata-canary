import React, { Fragment } from "react";
import { graphql, Link } from "gatsby";
import { PageMetadata } from "./utils/pagemetadata";

//Regular page function component
const MyPageTemplate = ({ pageContext, data }) => {
  return (
    <Fragment>
      <Link to="/">Home</Link>
      <pre>{JSON.stringify({ pageContext, data }, null, 2)}</pre>
    </Fragment>
  );
};

// Regular page query
export const pageQuery = graphql`
  query MyQuery($value: String!) {
    allSitePage(filter: { path: { eq: $value } }) {
      edges {
        node {
          id
          path
        }
      }
    }
  }
`;

// will receive same props as MyPageTemplate above
export const head = ({ pageContext }) => {
  return (
    <PageMetadata title={pageContext.value}>
      <script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
        crossOrigin="anonymous"
      ></script>
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
    </PageMetadata>
  );
};

export default MyPageTemplate;
