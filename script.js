// Get HTML elements using DOM methods
const noteInput = document.getElementById("noteInput");
const addNoteBtn = document.getElementById("addNoteBtn");
const notesContainer = document.getElementById("notesContainer");
const noteCount = document.getElementById("noteCount");

// Add Note
addNoteBtn.addEventListener("click", function () {

    const noteText = noteInput.value.trim();

    // Check if input is empty
    if (noteText === "") {
        alert("Please enter a note.");
        return;
    }

    // Create note elements dynamically
    const noteDiv = document.createElement("div");
    noteDiv.classList.add("note");

    const textSpan = document.createElement("span");
    textSpan.classList.add("note-text");

    // Use textContent to add the note
    textSpan.textContent = noteText;

    // Create button container
    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("note-buttons");

    // Create Edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-btn");

    // Create Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");

    // Create Important button
    const importantButton = document.createElement("button");
    importantButton.textContent = "Important";
    importantButton.classList.add("important-btn");

    // Edit functionality
    editButton.addEventListener("click", function () {

        const updatedNote = prompt(
            "Edit your note:",
            textSpan.textContent
        );

        if (updatedNote !== null && updatedNote.trim() !== "") {
            textSpan.textContent = updatedNote.trim();
        }
    });

    // Delete functionality
    deleteButton.addEventListener("click", function () {

        noteDiv.remove();

        updateNoteCount();
    });

    // Mark as Important
    importantButton.addEventListener("click", function () {

        noteDiv.classList.toggle("important");

        if (noteDiv.classList.contains("important")) {
            importantButton.textContent = "Unmark";
        } else {
            importantButton.textContent = "Important";
        }
    });

    // Add buttons to button container
    buttonDiv.appendChild(editButton);
    buttonDiv.appendChild(deleteButton);
    buttonDiv.appendChild(importantButton);

    // Add text and buttons to note
    noteDiv.appendChild(textSpan);
    noteDiv.appendChild(buttonDiv);

    // Add note to the webpage
    notesContainer.appendChild(noteDiv);

    // Clear input
    noteInput.value = "";

    // Update total note count
    updateNoteCount();
});

// Function to update note count
function updateNoteCount() {

    const totalNotes = notesContainer.children.length;

    noteCount.textContent = "Total Notes: " + totalNotes;
}