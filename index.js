
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
    location.reload();
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
})

function download(file, text) {
              
    //creating an invisible element
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,- ' + encodeURIComponent(text));
    element.setAttribute('download', file);
  
    // <a href="path of file" download="file name">
  
    document.body.appendChild(element);
  
    //onClick property
    element.click();
  
    document.body.removeChild(element);
}

exportBtn.addEventListener("click", function(){
    // Generate download of hello.txt 
    // file with some content
    let text = notes.join("\n- ");
    var filename = "Notes "+ String(new Date()).substring(0,15) + ".txt";

    download(filename, text);
}, false);
