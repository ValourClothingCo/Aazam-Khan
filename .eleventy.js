module.exports = function(eleventyConfig) {
  // Pass through the admin dashboard and image uploads to the live site
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/uploads");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};