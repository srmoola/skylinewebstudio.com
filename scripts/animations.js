
const menu = document.getElementById("menu");
let menuCounter = false;

function openMenu() {

  if (menuCounter === false) {
    menu.style.display = "block";
    gsap.fromTo(".menumobile", { y: -1000 }, { ease: "power4.out", duration: 1, y: 0 });
    document.body.style.overflow = "hidden";
    menuCounter = true;
  } else {
    gsap.to(".menumobile", { y: -1000 });
    document.body.style.overflow = "visible";
    menuCounter = false;
  }
}

let tl = gsap.timeline({ repeatDelay: 0 });


tl.add('start');
tl.from("#main", { opacity: 0, y: -75, duration: 0.75 }, 'start');
tl.from("#navbar", { opacity: 0, y: -75, duration: 0.75 }, 'start');
tl.from("#wavecontainer", { opacity: 0, y: -75, duration: 2 }, 'start');
