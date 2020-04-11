const pathname = new URL(window.location.href).pathname;

// TODO tighten this condition
if (pathname.includes("/admin")) {
  (async () => {
      await import("loadNetlifyIdentity.js");
      import("editorComponents");
  })();
}
