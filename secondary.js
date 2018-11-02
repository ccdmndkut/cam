window.onload = function() {
  console.log("loaded");
  (img = document.getElementById("vid")),
    (window.innerHeight = img.clientHeight - 50),
    (window.innerWidth = img.clientWidth);

  // document.addEventListener(
  //   "click",
  //   function(event) {
  //     (img = document.getElementById("vid")),
  //       (w = img.clientWidth - img.clientWidth * 0.5),
  //       (h = img.clientHeight - img.clientHeight * 0.5);
  //     window.resizeBy(-w, -h);
  //   },
  //   false
  // );
var dim = {

}


  document.addEventListener(
    "contextmenu",
    function(event) {
      event.preventDefault();      
      let oh = window.innerHeight;      
      let ww = window.innerWidth;
  
      
      (img = document.getElementById("vid")),
        (w = img.clientWidth - img.clientWidth * 0.5),
        (h = img.clientHeight - img.clientHeight * 0.5);
      window.resizeBy(w, h);
      event.preventDefault();
    },
    false
  );
};
