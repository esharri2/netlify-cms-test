module.exports = config => {
  // Add a filter using the Config API
  //   eleventyConfig.addFilter("myFilter", function() {});

  // Layout alias
  config.addLayoutAlias("default", "layouts/default.njk");

  // Include our static assets
  config.addPassthroughCopy("site/media");
  config.addPassthroughCopy({ "site/assets": "/" });
  config.setUseGitIgnore(false);


  // You can return your Config object (optional).
  return {
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    passthroughFileCopy: true,
    dir: {
      input: "site",
      output: "dist",
      includes: "includes",
      data: "globals"
    }
  };
};