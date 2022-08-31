const inputBtn = document.getElementById("input-btn");
const notesList = document.getElementById("notes-list");
const inputEl = document.getElementById("input-el");

let notes = [];
inputBtn.addEventListener("click", function(){
    notes.push(inputEl.value);
    inputEl.value = "";
    
})


