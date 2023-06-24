const boxContainer = document.getElementById("boxcontainer");

const descriptions = ["Design", "Development", "SEO", "Management", "Analytics", "Branding"];
const images = ["design.png", "development.png", "SEO.png", "management.png", "analytics.png", "branding.png"];

const addBoxes = () => {
  const box = document.createElement('div');
  box.setAttribute('class', 'boxhold');

  for (let i = 0; i < 6; i++) {
    boxContainer.appendChild(box.cloneNode(true));
  }

  const boxes = document.querySelectorAll(".boxhold");

  for (i = 0; i < boxes.length; i++) {
    const boxChild = document.createElement('div');
    const description = document.createElement('p');
    boxChild.setAttribute('class', 'box');
    description.setAttribute('class', 'description');
    description.textContent = descriptions[i];
    boxes[i].appendChild(boxChild);
    boxes[i].appendChild(description);
  }

  const boxchildren = document.querySelectorAll(".box");

  for (i = 0; i < boxchildren.length; i++) {
    const image = document.createElement("img");
    image.setAttribute("src", "/images/" + images[i]);
    image.setAttribute("class", "image");
    boxchildren[i].appendChild(image);
  }

}

addBoxes();