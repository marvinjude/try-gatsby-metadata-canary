import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export function GlobalHead() {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return <meta name="GLOBAL" description={data.site.siteMetadata.title} />;
}
