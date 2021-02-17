"use-strict";

// 1. See hover states for all interactive elements on the page
// 2. Receive an error message when the `form` is submitted if:
// 3. Any `input` field is empty. The message for this error should say
// * [Field Name] cannot be empty"*
// 4. The email address is not formatted correctly
// (i.e. a correct email address should have this structure: `name@host.tld`).
//  The message for this error should say *"Looks like this is not an email"*

let elName = document.getElementById("name");
let elLastName = document.getElementById("last_name");
let elEmail = document.getElementById("email");
let elPassword = document.getElementById("password");
let elBtn = document.getElementById("btn");
let elNameValidationMessage = document.getElementById(
  "name-validation-message"
);
let elLastNameValidationMessage = document.getElementById(
  "last-name-validation-message"
);
let elEmailValidationMessage = document.getElementById(
  "email-validation-message"
);
let elPasswordValidationMessage = document.getElementById(
  "password-validation-message"
);
let formElements = [elName, elLastName, elEmail, elPassword];

let validationElements = [
  elNameValidationMessage,
  elLastNameValidationMessage,
  elEmailValidationMessage,
  elPasswordValidationMessage,
];
let allowSubmit = false;

const fixName = function (e) {
  const el = e.target.id;
  const removeUnderline = el.replace("_", " ");
  const splitWords = removeUnderline.split(" ");
  // console.log(splitWords); // returns an array of the words.
  // fixedName = splitWords
  return splitWords
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
};

const validateField = function (e, name) {
  const el = e.target;
  const validationElName = el.id.replace("_", "-");
  const validationMessage = document.getElementById(
    `${validationElName}-validation-message`
  );
  console.log(el);
  console.log(el.id);
  if (el.value.length === 0) {
    validationMessage.innerHTML = `'${name}' cannot be empty.`;
  } else if (el.value.length > 0) {
    validationMessage.innerHTML = ` `;
    allowSubmit = true;
  }
};

elName.addEventListener("focusout", function (e) {
  validateField(e, fixName(e));
});

elLastName.addEventListener("focusout", function (e) {
  validateField(e, fixName(e));
});

elEmail.addEventListener("focusout", function (e) {
  validateField(e, fixName(e));
  if (elEmail.value.indexOf("@") === -1) {
    elEmailValidationMessage.innerHTML =
      "Looks like this is not an e-mail. Please include the @ symbol.";
    allowSubmit = false;
  } else {
    elEmailValidationMessage.innerHTML = ` `;
    allowSubmit = true;
  }
});

elPassword.addEventListener("focusout", function (e) {
  validateField(e, fixName(e));
});
