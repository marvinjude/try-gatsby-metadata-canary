import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default function useSiteMetadata() {
  const { site } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          siteUrl
          title
        }
      }
    }
  `);
  return site.siteMetadata;
}

export function PageMetadata({
  title,
  description,
  type,
  image,
  twitterCard,
  timeToRead,
  children,
  robots,
}) {
  const { siteUrl, title: siteTitle } = useSiteMetadata();

  return (
    <>
      <meta name="GLOBAL" description={siteTitle} />
      {title && <title>{title}</title>}
      {title && <meta property="og:title" content={title} />}
      {description && <meta name="description" content={description} />}
      {description && <meta property="og:description" content={description} />}
      {type && <meta property="og:type" content={type} />}
      {twitterCard && <meta name="twitter:card" content={twitterCard} />}
      {timeToRead && <meta name="twitter:label1" content="Reading time" />}
      {timeToRead && (
        <meta name="twitter:data1" content={`${timeToRead} min read`} />
      )}
      {robots && <meta name="robots" content={robots} />}
      {image && (
        <meta
          property="og:image"
          content={
            image.contentfulSrc
              ? `http:${image.contentfulSrc}`
              : `${siteUrl}${image.src}`
          }
        />
      )}
      {image?.width && <meta property="og:image:width" content={image.width} />}
      {image?.height && (
        <meta property="og:image:height" content={image.height} />
      )}
      {children}
    </>
  );
}
