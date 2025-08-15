let heading = document.getElementsByTagName("h1")[0];

function changeBgColor() {
  heading.style.backgroundColor = "chocolate";
}
// heading.onmouseover = changeBgColor;

heading.addEventListener("mouseover", changeBgColor);
heading.addEventListener("mouseout", function () {
  heading.style.backgroundColor = "transparent";
});
heading.addEventListener("click", function () {
  document.body.style.fontFamily = "gabriola";
});

let paragraph = document.getElementsByTagName("p")[0];

paragraph.addEventListener("click", function () {
  document.body.style.fontFamily = "gabriola";
});
paragraph.addEventListener("click", () => {
  document.body.style.backgroundColor = "yellowgreen";
});

let link = document.getElementsByTagName('a')[0];
link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Link was clicked');  
})

let count = 0;
function increase(){
  count++;
  document.getElementById('counter').textContent = count;
}
let counter = document.getElementsByTagName('button')[0];
counter.addEventListener('click', increase);

let paragraph2 = document.getElementsByTagName('p')[2];
paragraph2.addEventListener('mouseover', () => {
  paragraph2.style.backgroundColor = 'darkorange'
})
paragraph2.addEventListener('mouseout', () => {
  paragraph2.style.backgroundColor = 'transparent'
})

const firstImage = document.getElementsByClassName('image1')[0];
const switchImg = () => {
  if (firstImage.getAttribute('src') === 'landscape.jpg'){
    firstImage.setAttribute('src', 'grey-lake.jpg');
  } else {
    firstImage.setAttribute('src', 'landscape.jpg');
  }
}
firstImage.addEventListener('click', switchImg);

let paragraph3 = document.getElementsByTagName('p')[0];
let text = document.getElementsByClassName('text')[0];

text.addEventListener('mouseover', () => {
  text.style.opacity = '1';
})

text.addEventListener('mouseout', () => {
  text.style.opacity = '0';
})

let formEl= document.querySelector('form');
let display = document.querySelector('.display');
let nameInput = document.querySelector('input');

formEl.addEventListener('submit', (ev) => {
  ev.preventDefault();
  let inputValue = nameInput.value;
  display.innerText = inputValue;
  display.classList.add('animation-glow');

})
const displayAnimation = () => {
  if (display.classList.contains('animation-glow')) {
      display.classList.remove('animation-glow')
  }
}