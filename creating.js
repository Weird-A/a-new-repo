const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

buttonEl.addEventListener('click', function(e){
    let newPlayer= inputEl.value;

    let listItem = document.createElement('li');
    listItem.innerText = newPlayer;
    listEl.appendChild(listItem);
    inputEl.value = '';
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