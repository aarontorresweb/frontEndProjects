"use-strict";

const landscapes = [
  ["images/landscape/landscape1.jpeg", "Beach"],
  ["images/landscape/landscape2.jpeg", "Mountain"],
  ["images/landscape/landscape3.jpeg", "Sky"],
];

const animals = [
  ["images/animal/animal1.jpeg", "Cat"],
  ["images/animal/animal2.jpeg", "Dog"],
  ["images/animal/animal3.jpeg", "Bird"],
  ["images/animal/animal4.jpeg", "Rabbit"],
  ["images/animal/animal5.jpeg", "Unicorn"],
];

const time = [
  ["images/time/time1.jpeg", "images/time/time1A.jpeg"],
  ["images/time/time2.jpeg", "images/time/time2A.jpeg"],
  ["images/time/time3.jpeg", "images/time/time3A.jpeg"],
  ["images/time/time4.jpeg", "images/time/time4A.jpeg"],
  ["images/time/time5.jpeg", "images/time/time5A.jpeg"],
  ["images/time/time6.jpeg", "images/time/time6A.jpeg"],
  ["images/time/time7.jpeg", "images/time/time7A.jpeg"],
  ["images/time/time8.jpeg", "images/time/time8A.jpeg"],
];

const allImgs = [...landscapes, ...animals, ...time];

const picTextBtn = document.getElementById("answer-btn");
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
  picture.src = img[0];
};

picTextBtn.addEventListener("click", function (e) {
  e.preventDefault();
  picture.src = img[1];
});

imgBtn.addEventListener("click", function (e) {
  e.preventDefault();
  displayImage("random", 300, 100, "image");
});

landscapesBtn.addEventListener("click", function (e) {
  e.preventDefault();
  displayImage("landscape", 300, 100, "landscapes");
});

animalsBtn.addEventListener("click", function (e) {
  e.preventDefault();
  displayImage("animal", 300, 100, "animal");
});

timeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  displayImage("time", 300, 100, "time");
});
