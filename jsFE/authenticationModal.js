import "regenerator-runtime/runtime";

window.addEventListener("load", function () {
  if (sessionStorage.getItem("role") === "") {
    jQuery("#loginModal").modal({
      backdrop: "static",
      keyboard: false,
      show: true,
    });
  } else {
    if (
      sessionStorage.getItem("role") !== "admin" &&
      location.pathname.indexOf("backoffice") > -1
    ) {
      location.replace("/");
    }
  }
});
