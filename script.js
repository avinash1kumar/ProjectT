const addBtn = document.getElementById("addNote");
const container = document.getElementById("notesContainer");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

function saveNotes(){
    localStorage.setItem("notes", JSON.stringify(notes));
}

function renderNotes(){
    container.innerHTML = "";

    notes.forEach((note, index) => {

        const noteDiv = document.createElement("div");
        noteDiv.className = "note";

        const textarea = document.createElement("textarea");
        textarea.value = note;

        textarea.addEventListener("input", () => {
            notes[index] = textarea.value;
            saveNotes();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "X";
        deleteBtn.className = "delete-btn";

        deleteBtn.onclick = () => {
            notes.splice(index,1);
            saveNotes();
            renderNotes();
        };

        noteDiv.appendChild(deleteBtn);
        noteDiv.appendChild(textarea);

        container.appendChild(noteDiv);
    });
}

addBtn.addEventListener("click", () => {
    notes.push("");
    saveNotes();
    renderNotes();
});

renderNotes();