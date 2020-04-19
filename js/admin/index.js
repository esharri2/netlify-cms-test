const pathname = new URL(window.location.href).pathname;

if (pathname.includes("/admin") || pathname.includes("/#")) {
  (async () => {
    try {
      await import("./loadNetlifyIdentity.js");
    } catch (error) {
      console.error(error);
    }
  })();
}



