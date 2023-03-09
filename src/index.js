import { createElementWithParams } from "./helpers/DOMhelpers";
const body = document.querySelector("body");

const header = createElementWithParams("h1", {
  textContent: "Hello from function",
});

body.append(header);
