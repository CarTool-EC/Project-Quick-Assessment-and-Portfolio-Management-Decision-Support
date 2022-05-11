import "regenerator-runtime/runtime";

import { logoutApi } from "./requests";

function createLoginButton() {
  const role = sessionStorage.getItem("role");

  if (role === "admin") {
    adminLoginButton();
  } else {
    simpleButton();
  }
}

function simpleButton() {
  const btn = document.createElement("button");
  btn.classList.add("btn", "btn-light");

  const role = sessionStorage.getItem("role");
  const isLoggedIn = role !== "";

  let label = isLoggedIn ? "Logout" : "Login";

  const textNode = document.createTextNode(label);
  btn.appendChild(textNode);

  btn.addEventListener("click", onClickHandler);
  // document.getElementById("login-btn").appendChild(btn);
}

function adminLoginButton() {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  const container = document.createElement("div");

  const row = document.createElement("div");
  row.classList.add("row");

  const col1 = document.createElement("div");
  col1.classList.add("col-sm-8");

  const text = document.createElement("p");
  text.style.color = "#4e74df";
  text.style.maxHeight = "1rem !importnat";
  text.innerHTML = "Logged as admin";

  const imgDiv = document.createElement("div");
  imgDiv.classList.add("col-sm-4");

  const img = document.createElement("img");
  img.setAttribute("src", "../img/admin.png");
  img.className = "mt-2";

  btn.appendChild(container);
  container.appendChild(row);
  row.appendChild(col1);
  col1.appendChild(text);
  row.appendChild(imgDiv);
  imgDiv.appendChild(img);

  btn.addEventListener("click", logOut);

  document.getElementById("login-btn").appendChild(btn);
}

async function logOut() {
  try {
    await logoutApi();

    sessionStorage.setItem("role", "");
    location.replace("/");
  } catch (e) {
    console.error(e.message);
  }
}

async function onClickHandler() {
  const isLoggedIn = sessionStorage.getItem("role") !== "";

  if (isLoggedIn) {
    await logOut();
  }
}

createLoginButton();
