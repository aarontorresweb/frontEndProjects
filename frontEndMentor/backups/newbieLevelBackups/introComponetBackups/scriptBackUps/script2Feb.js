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
  const el = e.target;
  console.log(el);
};

elName.addEventListener("focusout", function (e) {
  const el = e.target;
  if (el.value.length === 0) {
    console.log(`${el.id} cannot be empty.`);
    elNameValidationMessage.innerHTML = `${el.id} cannot be empty.`;
  }
  fixName(e);
});

elLastName.addEventListener("focusout", function (e) {
  const el = e.target;
  if (el.value.length === 0) {
    console.log(`${el.id} cannot be empty.`);
    elLastNameValidationMessage.innerHTML = `${el.id} cannot be empty.`;
  }
  fixName(e);
});

elEmail.addEventListener("focusout", function (e) {
  const el = e.target;
  if (el.value.length === 0) {
    console.log(`${el.id} cannot be empty.`);
    elEmailValidationMessage.innerHTML = `${el.id} cannot be empty.`;
    allowSubmit = false;
  } else if (elEmail.value.indexOf("@") === -1) {
    console.log(
      `Looks like this is not an e-mail. ${elEmail} needs to have the '@
      ' symbol.`
    );
    elEmailValidationMessage.innerHTML =
      "Looks like this is not an e-mail. Please include the @ symbol.";
  }
  fixName(e);
});

elPassword.addEventListener("focusout", function (e) {
  const el = e.target;
  if (el.value.length === 0) {
    console.log(`${el.id} cannot be empty.`);
    elPasswordValidationMessage.innerHTML = `${el.id} cannot be empty.`;
  }
  fixName(e);
});
