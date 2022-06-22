const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const template = path.resolve("./src/template.js");

  const pages = ["sales", "pricing", "careers"];

  for (const page of pages) {
    createPage({
      path: page,
      component: template,
      context: {
        value: page,
      },
    });
  }
};
