"use-strict";

const landscapes = [
  ["landscape/landscape1", "Beach"],
  ["landscape/landscape2", "Mountain"],
  ["landscape/landscape3", "Sky"],
];

const animals = [
  ["animal/animal1", "Cat"],
  ["animal/animal2", "Dog"],
  ["animal/animal3", "Bird"],
  ["animal/animal4", "Rabbit"],
  ["animal/animal5", "Unicorn"],
];

const time = [
  ["time/time1", "time/time1A"],
  ["time/time2", "time/time2A"],
  ["time/time3", "time/time3A"],
  ["time/time4", "time/time4A"],
  ["time/time5", "time/time5A"],
  ["time/time6", "time/time6A"],
  ["time/time7", "time/time7A"],
  ["time/time8", "time/time8A"],
];

const allImgs = [...landscapes, ...animals, ...time];

const picTextBtn = document.getElementById("picture-text-btn");
const picText = document.getElementById("picture-text");
const picture = document.getElementById("picture");
const imgBtn = document.getElementById("image-btn");
const landscapesBtn = document.getElementById("landscapes-btn");
const animalsBtn = document.getElementById("animals-btn");
const timeBtn = document.getElementById("time-btn");
let img, imgType;

// https://stackoverflow.com/questions/5451445/how-to-display-image-with-javascript
const displayImage = function (type, width, height, alt) {
  let randNum;
  let allImgsRandNum;
  switch (type) {
    case "random":
      randNum = Math.floor(Math.random() * allImgs.length);
      img = allImgs[randNum];
      break;
    case "landscape":
      randNum = Math.floor(Math.random() * landscapes.length);
      img = landscapes[randNum];
      break;
    case "animal":
      randNum = Math.floor(Math.random() * animals.length);
      img = animals[randNum];
      break;
    case "time":
      randNum = Math.floor(Math.random() * time.length);
      img = time[randNum];
      //return (imgType = "time");
      break;
  }

  img.width = width;
  img.height = height;
  img.alt = alt;
  picture.src = `images/${img[0]}.jpeg`;
};

picTextBtn.addEventListener("click", function (e) {
  e.preventDefault();
  picText.innerHTML = img[1];
});

imgBtn.addEventListener("click", function (e) {
  e.preventDefault();
  picText.innerHTML = " ";
  displayImage("random", 300, 100, "image");
});

landscapesBtn.addEventListener("click", function (e) {
  e.preventDefault();
  picText.innerHTML = " ";
  displayImage("landscape", 300, 100, "landscapes");
});

animalsBtn.addEventListener("click", function (e) {
  e.preventDefault();
  picText.innerHTML = " ";
  displayImage("animal", 300, 100, "animal");
});

timeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  picText.innerHTML = " ";
  displayImage("time", 300, 100, "time");
});
