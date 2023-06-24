const mediaQuery = window.matchMedia('(max-width: 700px)')

const navbarfix =  () => {
    var elementTarget = document.getElementById("wavecontainer");
    if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) {
      this.document.getElementById("navbar").style.position = "fixed";
    } else {
      this.document.getElementById("navbar").style.position = "relative";
    }
}

if (mediaQuery.matches) {
  window.addEventListener("scroll", navbarfix);
}else{
    window.removeEventListener("scroll", navbarfix);
}


