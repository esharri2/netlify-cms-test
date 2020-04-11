const pathname = new URL(window.location.href).pathname;
console.log("pathname is ", pathname);
// TODO tighten this condition
if (pathname.includes("/admin")) {
  (async () => {
      console.log("Going to load admin scripts...");
      await import("./loadNetlifyIdentity.js");
      import("./editorComponents");
  })();
}
