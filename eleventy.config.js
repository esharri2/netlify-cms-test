const markdown = require("markdown-it")({
  html: true
});
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = config => {
  // Add a filter using the Config API
  //   eleventyConfig.addFilter("myFilter", function() {});

  // Plugins
  config.addPlugin(eleventyNavigationPlugin);

  // Layout alias
  config.addLayoutAlias("default", "layouts/default.njk");
  config.addLayoutAlias("about", "layouts/about.njk");

  // Include our static assets
  config.addPassthroughCopy("site/admin");
  config.addPassthroughCopy("site/media");
  config.addPassthroughCopy({ "site/assets": "/" });
  config.setUseGitIgnore(false);

  // Short codes
  config.addPairedShortcode("markdown", content => markdown.render(content));

  // You can return your Config object (optional).
  return {
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: "site",
      output: "dist",
      includes: "includes",
      data: "content"
    }
  };
};
