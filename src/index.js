import _ from "lodash";
import MyImage from "./image.png";
import "./style.css";
import printMe from "./print";

function component() {
  let element = document.createElement("div");
  let button = document.createElement("button");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  button.innerHTML = "Click me and check the console!";
  button.onclick = printMe;

  element.appendChild(button);

  // Add the image to our existing div.
  var myIcon = new Image();
  myIcon.src = MyImage;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
