import "regenerator-runtime/runtime";

/**
 *
 * @param {String} cssSelector
 * @param {String} text
 */
function setField(cssSelector, text) {
  document.querySelector(cssSelector).innerHTML = text;
}

async function printMetadada() {
  const defaultDBusCapsLabel = "<b>File Information:</b> ";
  const dBusCapsLabelSelector = "#all-in-one-file-div label";
  let metadata = { fileName: "", birthtime: "" };

  try {
    metadata = await fetch("/api/backoffice/metadata");
    metadata = await metadata.json();
  } catch (e) {
    console.error(e);
  } finally {
    setField(dBusCapsLabelSelector, defaultDBusCapsLabel);
    const nameText = `(Last file uploaded name: ${metadata.fileName} Last updated ${metadata.birthtime})`;

    setField(dBusCapsLabelSelector, defaultDBusCapsLabel + nameText);
  }
}
$(document).ready(function () {
  printMetadada();
});

const form = document.getElementById("form");

function formValidation() {
  let allInOneFile = document.getElementById("all-in-one-file").files[0];

  if (!allInOneFile) {
    const error = document.getElementById("error");
    error.classList.remove("d-none");
    return false;
  }
  return true;
}

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  if (!formValidation()) return;
  const errorParagrah = document.getElementById("error");
  errorParagrah.classList.add("d-none");

  let allInOneFile = document.getElementById("all-in-one-file").files[0];

  const formData = new FormData();
  formData.append("file", allInOneFile);

  const response = await fetch("/api/backoffice/upload_files", {
    method: "POST",
    body: formData,
  });
  const status = response.status;

  const responseObj = await response.json();

  const { message, error } = responseObj;

  const modal = createModal(error ? error : message);

  document.querySelector("body").appendChild(modal);

  jQuery(modal).modal("show");

  if (status === 200) {
    printMetadada();
  }
});

function createModal(message) {
  const modal = document.createElement("div");
  modal.classList.add("modal", "fade");
  modal.setAttribute("tabindex", "-1");
  modal.setAttribute("id", "exampleModal");
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-labelledby", "exampleModalLabel");

  const modal_dialog = document.createElement("div");
  modal_dialog.classList.add("modal-dialog");
  modal_dialog.setAttribute("role", "document");

  const modal_content = document.createElement("div");
  modal_content.classList.add("modal-content");

  const modal_body = document.createElement("div");
  modal_body.classList.add("modal-body");

  const paragraph = document.createElement("p");
  const paragraphText = document.createTextNode(message);
  paragraph.appendChild(paragraphText);

  const footer = document.createElement("div");
  footer.classList.add("modal-footer");

  const okBtn = document.createElement("button");
  okBtn.setAttribute("type", "button");
  okBtn.classList.add("btn", "btn-primary");
  okBtn.setAttribute("data-dismiss", "modal");
  const okLabel = document.createTextNode("Ok");
  okBtn.appendChild(okLabel);

  footer.appendChild(okBtn);
  modal_body.appendChild(paragraph);

  modal_content.appendChild(modal_body);
  modal_content.appendChild(footer);
  modal_dialog.appendChild(modal_content);
  modal.appendChild(modal_dialog);

  return modal;
}
