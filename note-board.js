const addNoteBtn = document.querySelector('#add-note');
const notesContainer = document.querySelector('#note-container');

function getRandomColor(){
    const alphaNum = '1234567890ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += alphaNum[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createNote(){
    const note = document.createElement('div');
    note.className = 'note';
    note.style.backgroundColor = getRandomColor();

    const noteContent = document.createElement('div');
    noteContent.className = 'note-content';
    noteContent.textContent = 'New Note';

    note.appendChild(noteContent);

    const noteInput = document.createElement('textarea');
    noteInput.className = 'note-input';
    noteInput.placeholder = `What's New?`;
    note.appendChild(noteInput);

    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.textContent = 'Remove';

    removeBtn.addEventListener('click', () => {
        note.remove();
    });

    note.appendChild(removeBtn);

    notesContainer.appendChild(note);
}

addNoteBtn.addEventListener('click', createNote);