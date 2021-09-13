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
let fixedName;

const fixName = function (e) {
  const el = e.target.id;
  const removeUnderline = el.replace("_", " ");
  const splitWords = removeUnderline.split(" ");
  // console.log(splitWords); // returns an array of the words.
  fixedName = splitWords
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
};

elName.addEventListener("focusout", function (e) {
  const el = e.target;
  fixName(e);
  if (el.value.length === 0) {
    elNameValidationMessage.innerHTML = `'${fixedName}' cannot be empty.`;
  } else if (el.value.length > 0) {
    elNameValidationMessage.innerHTML = ` `;
  }
});

elLastName.addEventListener("focusout", function (e) {
  const el = e.target;
  fixName(e);
  if (el.value.length === 0) {
    elLastNameValidationMessage.innerHTML = `'${fixedName}' cannot be empty.`;
  } else if (el.value.length > 0) {
    elLastNameValidationMessage.innerHTML = ` `;
  }
});

elEmail.addEventListener("focusout", function (e) {
  const el = e.target;

  fixName(e);
  if (el.value.length === 0) {
    elEmailValidationMessage.innerHTML = `'${fixedName}' cannot be empty.`;
    allowSubmit = false;
  } else if (elEmail.value.indexOf("@" === -1)) {
    elEmailValidationMessage.innerHTML =
      "Looks like this is not an e-mail. Please include the @ symbol.";
  } else {
    elEmailValidationMessage.innerHTML = ` `;
  }
});

elPassword.addEventListener("focusout", function (e) {
  const el = e.target;
  fixName(e);
  if (el.value.length === 0) {
    elPasswordValidationMessage.innerHTML = `'${fixedName}' cannot be empty.`;
  } else if (el.value.length > 0) {
    elPasswordValidationMessage.innerHTML = ` `;
  }
});
