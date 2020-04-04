const sharp = require("sharp");
const path = require("path");
var glob = require("glob");

// TODO make it so an image does not get stretched above native size

const mediaDir = "./dist/media/*.*";
const sizes = [
  // { tag: "xl", size: 1440 },
  { tag: "lg", size: 1080 },
  { tag: "md", size: 720 },
  { tag: "sm", size: 480 }
];

const getImageNames = () => glob.sync(mediaDir);

const createImages = async image => {
  const name = path.parse(image).name;
  const ext = path.extname(image);

  sizes.forEach(size => {
    sharp(image)
      .resize(size.size)
      .toFile(`./dist/media/${name}-${size.tag}${ext}`)
      .then(() => {
        return true;
      });
  });
};

const init = () => {
  const imageNames = getImageNames();
  imageNames.forEach(image => {
    createImages(image);
  });
};

init();
