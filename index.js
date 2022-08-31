
const deleteBtn = document.getElementById("delete-btn");
const urlBtn = document.getElementById("url-btn");
const exportBtn = document.getElementById("export-btn");
const inputBtn = document.getElementById("input-btn");
const notesList = document.getElementById("notes-list");
const inputEl = document.getElementById("input-el");

let notes = [];
const previousNotes = JSON.parse(localStorage.getItem("notes"));

function clearAllNotes(){
    notes = [];
    localStorage.clear();
    showNotes();
    inputEl.value = "";
}


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
    localStorage.setItem("notes", JSON.stringify(notes));
    showNotes()
})

// local storage manipulation

if(previousNotes){
    notes = previousNotes;
    showNotes();
}


deleteBtn.addEventListener("click", clearAllNotes);

urlBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        notes.push(tabs[0].url);
        localStorage.setItem("notes", JSON.stringify(notes));
        showNotes();
     });
    
     
    
    
    // console.log(window.location.href);
    // notes.push(`<a href='${window.location.href}'>
    //                   ${window.location.href}    
    //             </a>`
    // );
    // inputEl.value = "";
    // showNotes();
})


const data=`test`;
const blob = new Blob([data],{type:"octet-stream"});
const href = URL.createObjectURL