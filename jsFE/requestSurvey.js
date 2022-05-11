import "regenerator-runtime/runtime";

const FILES = (async function () {
  let test = await fetch("/api/backoffice/get-files");
  test = await test.json();
  return test;
}());

export default FILES;