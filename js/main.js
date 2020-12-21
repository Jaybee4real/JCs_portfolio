window.addEventListener("load", () => {
  window.setTimeout(() => {
    document.querySelector(".loader").classList.remove("loading");
  }, 2000);
});

var controller = new ScrollMagic.Controller();
// Scene Handler
var scene = new ScrollMagic.Scene({
  triggerElement: "#name-section", // point of execution
  duration: window.innerHeight, // pin element for the window height - 1
  marker: true,
  triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
  reverse: true, // allows the effect to trigger when scrolled in the reverse direction
}).setPin("#name-section"); // the element we want to pin

scene.on("progress", function (event) {
  if (event.progress >= 0.5 && event.scrollDirection == "FORWARD") {
    document.querySelector(".name-section").classList.add("stage-2");
  } else if (event.progress <= 0.5 && event.scrollDirection == "REVERSE") {
    document.querySelector(".name-section").classList.remove("stage-2");
  }
});

controller.addScene([scene]);
