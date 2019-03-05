import MyImage from "./image.png";
import "./style.css";
import printMe from "./print";
import { cube } from "./math";

function component() {
  let element = document.createElement("pre");

  element.innerHTML = ["Hello webpack!", "5 cubed is equal to " + cube(5)];

  return element;
}

let element = component();
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept("./print.js", function() {
    console.log("Accepting the updated printMe module!");
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  });
}
