const pathname = new URL(window.location.href).pathname;
// TODO tighten this condition

// THIS BREAKS INVITE AND RESET
// Need to expand condition to also check for the token thing

// if (pathname.includes("/admin")) {
//   (async () => {
//       await import("./loadNetlifyIdentity.js");
//   })();
// }


  (async () => {
    await import("./loadNetlifyIdentity.js");
  })();
