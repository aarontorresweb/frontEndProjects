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
let elValidationMessage = document.getElementById("validation-message");
let formElements = [elName, elLastName, elEmail, elPassword];
let allowSubmit = false;

console.log(elName.value);

const isEmptyField = function (e) {
  const el = e.target;
  if (el.value.length === 0) {
    console.log(`${el} cannot be empty.`);
    // let ourValidationMessage = document.createElement("p");
    // ourValidationMessage.innerHTML = `${el.id} cannot be empty.`;
    // elValidationMessage.appendChild(ourValidationMessage);
    elValidationMessage.innerHTML = `${el.id} cannot be empty.`;
  }
};

// elName.addEventListener("focusout", function (e) {
//   isEmptyField(e);
// });

// elLastName.addEventListener("focusout", function (e) {
//   isEmptyField(e);
// });

// elEmail.addEventListener("focusout", function (e) {
//   isEmptyField(e);
// });

// elPassword.addEventListener("focusout", function (e) {
//   isEmptyField(e);
// });

// formElements.forEach(function (element) {
//   element.addEventListener("focusout", function (e) {
//     isEmptyField(e);
//   });
// });

// CREATING
// class_array[0]
// document.querySelector('.should-be-validated')
// class_array
document
  .querySelectorAll(".should-be-validated")
  .forEach((item) =>
    item.addEventListener("focusout", (event) => isEmptyField(event))
  );

// Manual form verification.
// elName.addEventListener("click", function () {
//   if (elName.value.length === 0) {
//     console.log(`${elName.value} Name cannot be empty.`);
//     console.log(`allowSubmit is ${allowSubmit}.`);
//     document.querySelector("name").innerHTML = `${elName} cannot be empty.`;
//   }
// });

// This uses a forEach loop to apply the submit verification with a loop,
// rather than manually. However, it will not display the text to the text boxes.
// As well, it displays '[object HTMLInputElement]' for the 'el' cl output.
// elBtn.addEventListener("click", function (e) {
//   e.preventDefault();
//   formElements.forEach(function (el, index, array) {
//     console.log(el);
//     if (el.value.length === 0) {
//       console.log(`${el} cannot be empty.`);
//       console.log(`allowSubmit is ${allowSubmit}.`);
//       el.innerHTML = `${el} cannot be empty.`;
//     }
//   });
//   if (elEmail.value.indexOf("@") === -1) {
//     console.log(
//       `Looks like this is not an e-mail. ${elEmail} needs to have the '@
//       ' symbol.`
//     );
//     console.log(`allowSubmit is ${allowSubmit}.`);
//     elEmail.innerHTML = `${elEmail} needs to have the '@' symbol.`;
//   } else {
//     allowSubmit = true;
//     console.log(`allowSubmit is ${allowSubmit}.`);
//   }
// });

// Another version of the isEmptyField() function.
// const isEmptyField = function (e) {
//   const el = e.target;
//   console.log(el);
//   console.log(elValidationMessage);
//   if (el.value.length === 0) {
//     console.log(`${el.id} cannot be empty.`);
//     elValidationMessage.innerHTML = `${el.id} cannot be empty.`;
//   }
// };

// // fixElName function with cl's.
// const fixElName = function (e) {
//   const el = e.target.id;
//   // console.log(`fixElName() says: el = '${el}'.`);
//   const elNoUnderline = el.replace("_", " ");
//   // console.log(elNoUnderline);
//   const newEl = elNoUnderline[0].toUpperCase() + elNoUnderline.slice(1);
//   // console.log(`fixElName() says: newEl = '${newEl}'.`);
//   return newEl;
// };

// // fixElName function saved 5 February.
// const fixElName = function (e) {
//   const el = e.target.id;
//   const removeUnderline = el.replace("_", " ");
//   const capitalize =
//     removeUnderline.charAt(0).toUpperCase() + removeUnderline.slice(1);
//   console.log(capitalize);

//   const fixedEl = capitalize.split(" ").map(capitalize).join(" ");

//   return fixedEl;
// };
