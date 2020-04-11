(function(){
  console.log("going to load netlify identity widget...");
  const newScript = document.createElement("script");
  newScript.src = "https://identity.netlify.com/v1/netlify-identity-widget.js";
  document.body.appendChild(newScript);
})();