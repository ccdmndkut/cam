

window.onload = function() {
  document.addEventListener('contextmenu', event => event.preventDefault());
  var u = "camw.html",
    img = document.getElementById("vidb"),
    n = "myNewWindow",
    // w = img.clientWidth / 3,
    // h = (img.clientHeight - 0) / 3;
    wa = 40 * 16;
  ha = 40 * 9;
w = wa + 64
h = ha + 16
  var myparameters =
    "width=" +
    w +
    ", height=" +
    h +
    ", resizable = yes, toolbar = no, location = no, directories = no, status = no, menubar = no, scrollbars = no, resizable = no";

  window.close();
  var b = window.open(u, n, myparameters);
  var c = window.focus();
  return [b, c];
};

popper = function() {
    var u = "camw.html",
        img = document.getElementById("vidb"),
        n = "myNewWindow",
        w = img.clientWidth / 1.5,
        h = (img.clientHeight - 4.5) / 1.5;

    var myparameters =
        "width=" +
        w +
        ", height=" +
        h +
        ", resizable = yes, toolbar = no, location = no, directories = no, status = no, menubar = no, scrollbars = no, resizable = no";

    window.close();
    var b = window.open(u, n, myparameters);
    var c = window.focus();
    return [b, c];
}