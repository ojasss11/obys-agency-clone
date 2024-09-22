/*
gsap.from(".line h1", {
  y: +150,
  stagger: 0.25,
  duration: 0.5,
  delay: 0.5,
});
*/
/*
let h5time = document.querySelector("#line1-part1 h4");
let grow = 0;
setInterval(function () {
  if (grow < 100) {
    // grow++;
    // console.log(grow);
    h5time.innerHTML = grow++;
  } else {
    // grow = 100;
    // console.log(grow);
    h5time.innerHTML = grow;
  }
  // console.log(grow);
}, 35);
*/
let tl = gsap.timeline();

tl.from(".line h1", {
  y: +150,
  stagger: 0.25,
  duration: 0.5,
  // duration should be same or greater than set
  delay: 0.5,
});
tl.from("#line1-part1", {
  opacity: 0,
  onStart: function () {
    let h5time = document.querySelector("#line1-part1 h4");
    let grow = 0;
    setInterval(function () {
      if (grow < 100) {
        h5time.innerHTML = grow++;
      } else {
        h5time.innerHTML = grow;
      }
    }, 35);
    // duration is 3.5 seconds
  },
});
tl.to(".line h2", {
  animationName: "anime",
  opacity: 1,
});

tl.to("#loader", {
  opacity: 0,
  duration: 0.2,
  delay: 4,
});
tl.from("#page1", {
  y: 1600,
  ease: Power4,
  opacity: 0,
  ease: Power4,
  onStart: function () {
    // Hide the loader after page1 is already in motion
    gsap.to("#loader", {
      display: "none",
    });
  },
});
tl.to("#loader", {
  display: "none",
});
