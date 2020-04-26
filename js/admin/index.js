const pathname = new URL(window.location.href).pathname;

if (pathname.includes("/admin") || pathname.includes("/#")) {
  console.log("loading Netlify Identity...");
  (async () => {
    try {
      await import("./loadNetlifyIdentity.js");
    } catch (error) {
      console.error(error);
    }
  })();
}



