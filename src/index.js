import _ from 'lodash';
import MyImage from './image.png';
import './style.css';

function component() {
  let element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  var myIcon = new Image();
  myIcon.src = MyImage;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
