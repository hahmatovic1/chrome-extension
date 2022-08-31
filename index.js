const inputBtn = document.getElementById("input-btn");
const notesList = document.getElementById("notes-list");
const inputEl = document.getElementById("input-el");

let notes = [];

function showNotes(){
    let listNotes = "";
    for (let i = 0; i < notes.length; i++){
        listNotes += `<li>${notes[i]}</li>`;
    }
    notesList.innerHTML = listNotes;
}


inputBtn.addEventListener("click", function(){
    notes.push(inputEl.value);
    inputEl.value = "";
    showNotes()
})


