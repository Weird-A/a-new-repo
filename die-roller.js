let count = 0;


let rollButton = document.getElementById('rollButton');
// rollButton.addEventListener('click', () => {
//     body.img.style.transition = '0.5s';
// })
rollButton.addEventListener('click', () => {
    let randomNum = Math.floor(Math.random() * 6) + 1;
console.log(randomNum);

let dieImage = document.getElementById('die');
// dieImage.style.transitionDuration = '0.8s';
// dieImage.style.transitionTimingFunction = 'ease';
dieImage.classList.add('smooth');

dieImage.setAttribute('src', `dice-${randomNum}.png`);
count++;
})

