import "regenerator-runtime/runtime";

const authenticationApi = require("./requests").authenticationApi;

(async () => {
  try {
    let temp = await authenticationApi();
    temp = await temp.json();
    sessionStorage.setItem("role", temp.role || "");
  } catch (e) {
    sessionStorage.setItem("role", "");
  }
})();
