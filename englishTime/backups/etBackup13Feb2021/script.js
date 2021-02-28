"use-strict";

const images = ["image1", "image2", "image3"];
const imgBtn = document.getElementById("image-btn");
const picture = document.getElementById("picture");

const selectImage = function () {
  let randNum = Math.floor(Math.random() * images.length);
  const img = images[randNum];
  return `images/${img}.jpeg`;
};

// https://stackoverflow.com/questions/5451445/how-to-display-image-with-javascript
const displayImage = function (src, width, height, alt) {
  let img = document.createElement("img");
  img.src = src;
  img.width = width;
  img.height = height;
  img.id = "random-image";
  img.alt = alt;
  picture.createElement = img.src;
  document.getElementById("picture").innerHTML = img;

  // document.getElementById("random-image").parentNode.removeChild("img");
  document.body.appendChild(img);
};

imgBtn.addEventListener("click", function (e) {
  e.preventDefault();
  displayImage(selectImage(), 300, 100, "image");
});
