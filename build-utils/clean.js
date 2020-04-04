const del = require("del");

(async () => {
  const deletedPaths = await del(["dist/**/*"]);

  console.log("Deleted files and directories:\n", deletedPaths.join("\n"));
})();
