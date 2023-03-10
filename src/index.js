import { createElementWithParams } from "./helpers/DOMhelpers";
const body = document.querySelector("body");

const header = createElementWithParams("h2", {
  textContent: "Hello from function",
});

body.append(header);
