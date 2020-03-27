const markdown = require("markdown-it")({
  html: true
});
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = config => {

  // Plugins
  config.addPlugin(eleventyNavigationPlugin);

  // Layout alias
  config.addLayoutAlias("default", "layouts/default.njk");
  config.addLayoutAlias("about", "layouts/about.njk");

  // Include our static assets
  config.addPassthroughCopy("site/admin");
  config.addPassthroughCopy({"site/media/uploads" : "/media"});
  config.addPassthroughCopy({"site/media/icons": "/media/icons" });

  config.addPassthroughCopy({ "site/assets": "/" });
  config.setUseGitIgnore(false);

  // Short codes
  config.addPairedShortcode("markdown", content => markdown.render(content));

  // Filters
  config.addFilter("prettyDate", (value) => {
    const date = new Date(Date.parse(value));
    return date.toLocaleDateString('en-US');
  });


  // You can return your Config object (optional).
  return {
    templateFormats: ["md", "njk", "json"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: "site",
      output: "dist",
      includes: "includes",
      data: "data"
    }
  };
};
