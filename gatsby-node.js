const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const template = path.resolve("./src/template.js");
  createPage({
    path: "/hey",
    component: template,
    context: {
      value: "/hey",
      name: "Heey",
    },
  });
};
