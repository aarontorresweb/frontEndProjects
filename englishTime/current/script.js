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
const objectMother = {
  Landforms: landforms,
  "Conversation Questions": conversationQuestions,
  Animals: animals,
  Time: time,
};
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

/* SLIDER JS: From Jonas Schmedtmann's JS Course and modified. */

const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

const dotContainer = document.querySelector(".dots");
const sliderContainer = document.querySelector(".slider");
const slideTypeSelector = document.querySelector(".slide-type-selector");

const fillSelect = function (selectElement, data, text) {
  selectElement.innerHTML = " "; // Clears the input field.
  selectElement.innerHTML = `<option selected value=${text} disabled>${text}</option>`; // Adds the default HTML
  let textInput = "";
  for (let i = 0; i < data.length; i++) {
    let option = document.createElement("option");
    option.value = option.text = data[i];
    // data[i].charAt(0).toUpperCase() +
    // data[i]
    //   .slice(1)
    //   .split(/(?=[A-Z])/)
    //   .join(" ")
    //   .split(/(0*[1-9][0-9]*)/)
    //   .join(" ");
    selectElement.add(option);
    console.log(option.value, option.text);
  }
};

const getSlides = function (slideType) {
  // Check if there are already slides.
  if (document.getElementById("slide")) {
    console.log("Found a slide.");
    // const slideId = document.queryGetElementById(".slideId");
    // slideId.remove();
  }
  // Creates the slides dynamically.
  console.log(slideType);
  const slides = objectMother[slideType];
  slides.flat().forEach(function (value, key, map) {
    const slide = document.createElement("div");
    slide.classList.add("slide");
    const img = document.createElement("img");
    // img.id = "slideId";
    img.classList.add("slide-img");
    img.src = value;
    slide.appendChild(img);
    sliderContainer.appendChild(slide);
  });
};

const slider = function (slideType) {
  getSlides(slideType);
  const slides = document.querySelectorAll(".slide");
  const maxSlide = slides.length;
  const minSlide = 0;
  let curSlide = 0;

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  // Function declarations.
  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add(`dots__dot--active`);
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      ("");
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};

// Event Listeners
document.addEventListener("DOMContentLoaded", function (e) {
  const themeNames = Object.keys(objectMother); //These are the names taken from the 'objectMother' object. Made into a var for readability.
  fillSelect(slideTypeSelector, themeNames, "Please choose a theme.");
  const slide = document.createElement("div");
  slide.classList.add("slide");
  const img = document.createElement("img");
  img.id = "slideId";
  img.src = "images/extra/intro.jpeg";
  slide.appendChild(img);
  sliderContainer.appendChild(slide);
});

slideTypeSelector.addEventListener("change", function (e) {
  const dotsElement = sliderContainer.querySelector(".dots");
  const dotElements = sliderContainer.getElementsByClassName("dots__dot");
  const dotArray = Array.from(dotElements);
  dotArray &&
    dotArray.forEach((item) => {
      dotsElement.removeChild(item);
    });
  const slideElements = sliderContainer.getElementsByClassName("slide");
  const slideArray = Array.from(slideElements);
  slideArray &&
    slideArray.forEach((item) => {
      sliderContainer.removeChild(item);
    });

  console.log(slideTypeSelector.value);
  const slideType = slideTypeSelector.value;
  console.log(slideType);
  slider(slideType);
});

// Ripple Effect
// Link: https://codepen.io/Ruddy/pen/09052b957d82a17bd6ca70ac6663dd6a

const btns = document.getElementsByClassName("btn");
Array.from(btns).forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const target = e.target;
    // Remove any old one
    let rippleElements = document.getElementsByClassName("ripple");
    if (rippleElements) {
      Array.from(rippleElements).forEach((ripple) => {
        ripple.remove();
      });
    }

    // Setup
    let posX = target.offsetLeft; // $(this).offset().left,
    let posY = target.offsetTop; // $(this).offset().top),
    let buttonWidth = target.offsetWidth; // $(this).width();
    let buttonHeight = target.offsetHeight; //$(this).height();
    // console.log(posX);
    // console.log(posY);
    // console.log(buttonWidth);
    // console.log(buttonHeight);

    // Add the element
    const span = document.createElement("span");
    span.classList.add("ripple");
    target.prepend(span);

    // Make it round!
    if (buttonWidth >= buttonHeight) {
      buttonHeight = buttonWidth;
    } else {
      buttonWidth = buttonHeight;
    }

    // Get the center of the element
    var x = e.pageX - posX - buttonWidth / 2;
    var y = e.pageY - posY - buttonHeight / 2;

    // Add the ripples CSS and start the animation
    span.style.width = buttonWidth;
    span.style.height = buttonHeight;
    span.style.top = y + "px";
    span.style.left = x + "px";

    span.classList.add("rippleEffect");
  });
});
