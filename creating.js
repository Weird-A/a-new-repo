const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

buttonEl.addEventListener('click', function(e){
    let newPlayer= inputEl.value;

    let listItem = document.createElement('li');

    let delBtn = document.createElement('button');
    delBtn.innerText = 'Delete';
    delBtn.style.marginLeft = '10px';


    listItem.innerText = newPlayer;

    listItem.append('newPlayer');
    listItem.appendChild('delBtn');

    listEl.appendChild(listItem);

    inputEl.value = '';

    delBtn.addEventListener('click', (e) => {
        listItem.remove();
    })
})

let commentButton = document.getElementsByClassName('comment')[0];
let inputUser = document.querySelectorAll('input')[1];
let inputUser2 = document.querySelectorAll('input')[2];
let commentUser = document.querySelector('.comment-section');

commentButton.addEventListener('click', function (e) {
    let newUser = inputUser.value;
    let user = document.createElement('h2');
    user.innerText = newUser;
    commentUser.appendChild(user);
    inputUser.value = '';

    let newComment = inputUser2.value;
    let comment = document.createElement('p');
    comment.innerText = newComment;
    commentUser.appendChild(comment);
    inputUser2.value = '';
})

let beforeEndBtn = document.querySelector('.before-end');
let afterBeginBtn = document.querySelector('.after-begin');
let box = document.querySelector('div.box');

// let remove = document.querySelector('#remove');
// remove.addEventListener('click', (e) => )

function createBox (){
   let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.backgroundColor = 'white';

    return div;
}
beforeEndBtn.addEventListener('click', (e) => {
    let newDiv = createBox();

    newDiv.style.border = '1px solid green'

    box.insertAdjacentElement('beforeend', newDiv);
})
afterBeginBtn.addEventListener('click', (e) => {
    let newDiv = createBox();

    newDiv.style.border = '1px solid red'
    box.insertAdjacentElement('afterbegin', newDiv);
})
