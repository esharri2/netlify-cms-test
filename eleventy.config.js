let markdown = require("markdown-it")({
  html: true
});

module.exports = config => {
  // Add a filter using the Config API
  //   eleventyConfig.addFilter("myFilter", function() {});

  // Layout alias
  config.addLayoutAlias("default", "layouts/default.njk");

  // Include our static assets
  config.addPassthroughCopy("site/admin");
  config.addPassthroughCopy("site/media");
  config.addPassthroughCopy({ "site/assets": "/" });
  config.setUseGitIgnore(false);

  // Short codes
  config.addNunjucksShortcode("markdown", content => markdown.render(content));

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
