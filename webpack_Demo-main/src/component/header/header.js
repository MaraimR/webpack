import "./style.css";
const element = document.createElement("header");

element.innerHTML = "this is webpack demo";
element.classList.add('info')
document.body.appendChild(element);

// nooo

import photo from '../../assets/city.png'
const img = document.createElement("img");
img.src=photo;
img.style.width="50px"
img.style.height="50px"
element.appendChild(img);



