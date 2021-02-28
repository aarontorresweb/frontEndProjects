"use-strict";

const landforms = [
  ["images/landforms/landforms1.jpeg", "images/landforms/landforms1A.jpeg"],
  ["images/landforms/landforms2.jpeg", "images/landforms/landforms2A.jpeg"],
  ["images/landforms/landforms3.jpeg", "images/landforms/landforms3A.jpeg"],
  ["images/landforms/landforms4.jpeg", "images/landforms/landforms4A.jpeg"],
  ["images/landforms/landforms5.jpeg", "images/landforms/landforms5A.jpeg"],
];

const conversationQuestions = [
  [
    "images/conversationQuestions/conversationQuestion1.jpeg",
    "images/conversationQuestions/conversationQuestion1A.jpeg",
  ],
  [
    "images/conversationQuestions/conversationQuestion2.jpeg",
    "images/conversationQuestions/conversationQuestion2A.jpeg",
  ],
  [
    "images/conversationQuestions/conversationQuestion3.jpeg",
    "images/conversationQuestions/conversationQuestion3A.jpeg",
  ],
  [
    "images/conversationQuestions/conversationQuestion4.jpeg",
    "images/conversationQuestions/conversationQuestion4A.jpeg",
  ],
  [
    "images/conversationQuestions/conversationQuestion5.jpeg",
    "images/conversationQuestions/conversationQuestion5A.jpeg",
  ],
];

const animals = [
  ["images/animals/animals1.jpeg", "images/animals/animals1A.jpeg"],
  ["images/animals/animals2.jpeg", "images/animals/animals2A.jpeg"],
  ["images/animals/animals3.jpeg", "images/animals/animals3A.jpeg"],
  ["images/animals/animals4.jpeg", "images/animals/animals4A.jpeg"],
  ["images/animals/animals5.jpeg", "images/animals/animals5A.jpeg"],
  ["images/animals/animals6.jpeg", "images/animals/animals6A.jpeg"],
  ["images/animals/animals7.jpeg", "images/animals/animals7A.jpeg"],
  ["images/animals/animals8.jpeg", "images/animals/animals8A.jpeg"],
  ["images/animals/animals9.jpeg", "images/animals/animals9A.jpeg"],
  ["images/animals/animals10.jpeg", "images/animals/animals10A.jpeg"],
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

const allImgs = [...landforms, ...conversationQuestions, ...animals, ...time];
let img, imgType;

const answerBtn = document.getElementById("answer-btn");
const picture = document.getElementById("picture");
const randImgBtn = document.getElementById("rand-img-btn");
const conversationBtn = document.getElementById("conversation-btn");
const landFormsBtn = document.getElementById("landforms-btn");
const animalsBtn = document.getElementById("animals-btn");
const timeBtn = document.getElementById("time-btn");

// https://stackoverflow.com/questions/5451445/how-to-display-image-with-javascript
const displayImage = function (type, alt) {
  let randNum = 0;
  switch (type) {
    case "random":
      randNum = Math.floor(Math.random() * allImgs.length);
      console.log(randNum, "random");
      img = allImgs[randNum];
      break;
    case "landforms":
      randNum = Math.floor(Math.random() * landforms.length);
      console.log(randNum, "landforms");
      img = landforms[randNum];
      break;
    case "conversation":
      randNum = Math.floor(Math.random() * conversationQuestions.length);
      console.log(randNum, "conversation");
      img = conversationQuestions[randNum];
      break;
    case "animals":
      randNum = Math.floor(Math.random() * animals.length);
      console.log(randNum, "animals");
      img = animals[randNum];
      break;
    case "time":
      randNum = Math.floor(Math.random() * time.length);
      console.log(randNum, "time");
      img = time[randNum];
      break;
  }

  // img.alt = alt; // NOTE: Why doesn't this work?
  picture.src = img[0];
};

// To display the answer. Displayed underneath the main presentation image.
answerBtn.addEventListener("click", function (e) {
  e.preventDefault();
  picture.src = img[1];
});

// To display the topic selections. Displayed on the left side of the image.
randImgBtn.addEventListener("click", function (e) {
  e.preventDefault();
  displayImage("random", "image");
});

conversationBtn.addEventListener("click", function (e) {
  e.preventDefault();
  displayImage("conversation", "conversation");
});

landFormsBtn.addEventListener("click", function (e) {
  e.preventDefault();
  displayImage("landforms", "landforms");
});

animalsBtn.addEventListener("click", function (e) {
  e.preventDefault();
  displayImage("animals", "animals");
});

timeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  displayImage("time", "time");
});
