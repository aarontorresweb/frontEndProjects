"use-strict";

const images = [
  ["image1", "Beach"],
  ["image2", "Mountain"],
  ["image3", "Sky"],
  ["image4", "Cat"],
  ["image5", "Dog"],
  ["image6", "Bird"],
  ["image7", "Rabbit"],
  ["image8", "Unicorn"],
];

const imgBtn = document.getElementById("image-btn");
const picTextBtn = document.getElementById("picture-text-btn");
const picText = document.getElementById("picture-text");
const picture = document.getElementById("picture");
let img;

// https://stackoverflow.com/questions/5451445/how-to-display-image-with-javascript
const displayImage = function (width, height, alt) {
  let randNum = Math.floor(Math.random() * images.length);
  img = images[randNum];
  img.width = width;
  img.height = height;
  img.alt = alt;
  picture.src = `images/${img[0]}.jpeg`;
};

imgBtn.addEventListener("click", function (e) {
  e.preventDefault();
  picText.innerHTML = " ";
  displayImage(300, 100, "image");
});

picTextBtn.addEventListener("click", function (e) {
  e.preventDefault();
  picText.innerHTML = img[1];
});
