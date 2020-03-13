(function() {
  let prevY = 0;
  document.addEventListener("scroll", () => {
    const y = window.scrollY;
    if (y > 100 && y > prevY) {
      console.log("trigger");
    }
    prevY = y;
  });
})();
