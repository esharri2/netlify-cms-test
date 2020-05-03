const jsdom = require("jsdom");
const { JSDOM } = jsdom;

module.exports = function (value, outputPath) {
  if (outputPath.endsWith(".html")) {
    const DOM = new JSDOM(value, {
      resources: "usable",
    });
    
    const document = DOM.window.document;

    const markdownImages = [...document.querySelectorAll(".cmp-markdown img")];
  
    if (markdownImages.length) {
      markdownImages.forEach((image) => {
        image.setAttribute("loading", "lazy");
        console.log("YO");
        console.log(image)

        // If an image has a title it means that the user added a caption
        // so replace the image with a figure containing that image and a caption
        if (image.hasAttribute("title")) {
          const figure = document.createElement("figure");
          const figCaption = document.createElement("figcaption");

          figCaption.innerHTML = image.getAttribute("title");

          image.removeAttribute("title");

          figure.appendChild(image.cloneNode(true));
          figure.appendChild(figCaption);

          image.replaceWith(figure);
        }
      });
    }

    return "<!DOCTYPE html>\r\n" + document.documentElement.outerHTML;
  }
  return value;
};

