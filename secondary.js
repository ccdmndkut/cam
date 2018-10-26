window.onload = function() {
  console.log("loaded");
  (img = document.getElementById("vid")),
    (window.innerHeight = img.clientHeight - 50),
    (window.innerWidth = img.clientWidth);

  document.addEventListener(
    "click",
    function(event) {
      (img = document.getElementById("vid")),
        (w = img.clientWidth - img.clientWidth * 0.9),
        (h = img.clientHeight - img.clientHeight * 0.9);
      window.resizeBy(-w, -h);
    },
    false
  );
  document.addEventListener(
    "contextmenu",
    function(event) {
      (img = document.getElementById("vid")),
        (w = img.clientWidth - img.clientWidth * 0.9),
        (h = img.clientHeight - img.clientHeight * 0.9);
      window.resizeBy(w, h);
      event.preventDefault();
    },
    false
  );
};
