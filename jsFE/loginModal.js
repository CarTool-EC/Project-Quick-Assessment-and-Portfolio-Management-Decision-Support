import "regenerator-runtime/runtime";

import { loginApi } from "./requests";

function loginSuccesHandler(role) {
  sessionStorage.setItem("role", role);

  location.reload();
}
const showErrorMessage = (message) => {
  const errorElement = document.querySelector("#invalid-inputs");
  errorElement.classList.remove("d-none");
  errorElement.innerText = message;
};
const logIn = async (username, password) => {
  let response = await loginApi(username, password);

  try {
    let status = response.status;
    response = await response.json();
    if (status === 200) {
      loginSuccesHandler(response.role);
    } else {
      showErrorMessage(response.message);
    }
  } catch (e) {
    console.error(e.message);
  }
};

function createLogInModal() {
  const modal = customElement("div", ["modal", "fade"], {
    id: "loginModal",
    tabindex: "-1",
    role: "dialog",
    "aria-hidden": "true",
  });

  const modalDialog = customElement("div", ["modal-dialog"], {
    role: "document",
  });

  const modalContent = customElement("div", ["modal-content"]);

  const modalHeader = customElement("div", ["modal-header"]);

  const gridHeader = customElement("div", ["container-fluid"]);

  const headerAvatarDiv = customElement("div", [
    "row",
    "justify-content-center",
  ]);

  const headerAvatar = customElement("img", [], {
    id: "avatar",
    src: "../img/avatar.png",
    alt: "avatar",
  });

  const headerTitleDiv = customElement("div", [
    "row",
    "justify-content-center",
  ]);
  const div = customElement("div");
  const headerTitle = customElement("h5", ["row", "modal-title"], {
    id: "modal-title",
  });
  const headerText = document.createTextNode("Log in as member state");

  const modalBody = customElement("div", ["modal-body"]);

  const bodyGrid = customElement("div", ["container-fluid"]);

  const form = customElement("form");
  const invalidInputs = customElement(
    "p",
    ["alert", "alert-danger", "d-none"],
    { id: "invalid-inputs" }
  );

  const userDiv = customElement("div", [
    "row",
    "justify-content-center",
    "custom-row-styling",
  ]);

  const usernameInput = customElement("input", [], {
    type: "text",
    name: "username",
    id: "username",
    placeholder: "Username",
  });

  const passwordDiv = customElement("div", [
    "row",
    "justify-content-center",
    "custom-row-styling",
  ]);

  const passwordInput = customElement("input", [], {
    type: "password",
    name: "password",
    id: "password",
    placeholder: "Password",
  });

  const buttonDiv = customElement("div", [
    "row",
    "justify-content-center",
    "custom-row-styling",
  ]);

  const button = customElement("button", ["btn", "text-white"], {
    type: "submit",
    id: "as-user",
  });

  const buttonLabel = document.createTextNode("Log in and start the assesment");
  button.appendChild(buttonLabel);

  modal.appendChild(modalDialog);
  modalDialog.appendChild(modalContent);
  modalContent.appendChild(modalHeader);

  modalContent.appendChild(modalBody);
  modalHeader.appendChild(gridHeader);

  gridHeader.appendChild(headerAvatarDiv);
  headerAvatarDiv.appendChild(headerAvatar);
  gridHeader.appendChild(headerTitleDiv);
  headerTitleDiv.appendChild(div);
  div.appendChild(headerTitle);
  headerTitle.appendChild(headerText);

  modalBody.appendChild(bodyGrid);
  bodyGrid.appendChild(form);

  form.appendChild(invalidInputs);
  form.appendChild(userDiv);
  userDiv.appendChild(usernameInput);

  form.appendChild(passwordDiv);
  passwordDiv.appendChild(passwordInput);

  form.appendChild(buttonDiv);
  buttonDiv.appendChild(button);

  document.body.appendChild(modal);

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value || "";
    const password = document.getElementById("password").value || "";

    await logIn(username, password);
  });
}

createLogInModal();

/**
 * @param {String} elemName
 * @param {Array} classes
 * @param {Object} attributes
 */
function customElement(elemName, classes, attributes) {
  classes = classes || [];
  attributes = attributes || {};
  const elem = document.createElement(elemName);

  for (let i = 0; i < classes.length; i++) {
    elem.classList.add(classes[i]);
  }

  for (let attribute in attributes) {
    elem.setAttribute(attribute, attributes[attribute]);
  }

  return elem;
}
