// get notes 
function getNotes() {
  let saved = localStorage.getItem("notes");
  if (saved) {
    return JSON.parse(saved);
  }
  return [];
}

// save notes 
function setNotes(list) {
  localStorage.setItem("notes", JSON.stringify(list));
}

// display notes on the page
function showNotes() {
  let container = document.getElementById("notes");
  container.innerHTML = "";

  let notes = getNotes();
  notes.forEach((n, i) => {
    let box = document.createElement("div");
    box.className = "note";

    box.innerHTML = `
      <p>${n}</p>
      <button onclick="editNote(${i})">Edit</button>
      <button onclick="deleteNote(${i})">Delete</button>
    `;
    container.appendChild(box);
  });
}

// add a new note
document.getElementById("noteForm").addEventListener("submit", function(e){
  e.preventDefault();
  let input = document.getElementById("noteInput");
  let val = input.value.trim();
  if(val){
    let notes = getNotes();
    notes.push(val);
    setNotes(notes);
    input.value = "";
    showNotes();
  }
});

// edit a note
function editNote(i){
  let notes = getNotes();
  let txt = prompt("Edit your note:", notes[i]);
  if(txt && txt.trim()){
    notes[i] = txt.trim();
    setNotes(notes);
    showNotes();
  }
}

// delete a note
function deleteNote(i){
  let notes = getNotes();
  notes.splice(i, 1);
  setNotes(notes);
  showNotes();
}

// load notes when page loads
showNotes();
