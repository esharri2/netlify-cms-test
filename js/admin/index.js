const location = window.location.href;
const pathname = new URL(location).pathname;

const loadNetlifyIdentity = () => {
  const newScript = document.createElement("script");
  newScript.src = "https://identity.netlify.com/v1/netlify-identity-widget.js";
  document.body.appendChild(newScript);
};

if (pathname.includes("/admin")) {
  loadNetlifyIdentity();
}



// (async () => {
//   if (somethingIsTrue) {
//     // import module for side effects
//     await import("/modules/my-module.js");
//   }
// })();

{/* <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>; */}
// 
