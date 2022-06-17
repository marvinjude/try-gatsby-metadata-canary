import React, { Fragment } from "react";
import { graphql, Link } from "gatsby";
import { GlobalHead } from "./utils";

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
export const head = (props) => {
  return (
    <Fragment>
      <GlobalHead />
      <title>{props.pageContext.name}</title>
    </Fragment>
  );
};

export default MyPageTemplate;
