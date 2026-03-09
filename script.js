const addBtn = document.getElementById("addBtn");
const container = document.getElementById("notesContainer");
const toggleTheme = document.getElementById("toggleTheme");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

/* SAVE NOTES */

function saveNotes(){
localStorage.setItem("notes", JSON.stringify(notes));
}

/* DISPLAY NOTES */

function showNotes(){

container.innerHTML = "";

notes.forEach((note,index)=>{

const div = document.createElement("div");
div.className = "note";

const textarea = document.createElement("textarea");
textarea.value = note;

textarea.addEventListener("input",()=>{
notes[index] = textarea.value;
saveNotes();
});

const del = document.createElement("button");
del.textContent = "X";
del.className = "delete";

del.onclick = ()=>{
notes.splice(index,1);
saveNotes();
showNotes();
};

div.appendChild(textarea);
div.appendChild(del);

container.appendChild(div);

});

}

/* ADD NOTE */

addBtn.onclick = ()=>{
notes.push("");
saveNotes();
showNotes();
};

/* DARK MODE */

if(localStorage.getItem("theme") === "dark"){
document.body.classList.add("dark");
toggleTheme.textContent = "Lite Mode";
}

toggleTheme.onclick = ()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
localStorage.setItem("theme","dark");
toggleTheme.textContent = "Lite Mode";
}else{
localStorage.setItem("theme","light");
toggleTheme.textContent = "Dark Mode";
}

};

showNotes();