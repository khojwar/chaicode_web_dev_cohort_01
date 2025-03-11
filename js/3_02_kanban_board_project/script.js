


const addTaskBtn = document.getElementById('add-task-btn');
const todoBoard = document.getElementById('todo-board');
const addBoardBtn = document.getElementById('addBoardBtn');
const boardContainer = document.getElementById('boardContainer');
const formContainer = document.getElementById("formContainer");
const addtitleSubmit = document.getElementById("addtitleSubmit");
const formInput = document.getElementById("form-input");

function attachDragEvents(item) {
    item.addEventListener("dragstart", () => {
        item.classList.add("dragging");
    });

    item.addEventListener("dragend", () => {
        item.classList.remove("dragging");
    });
}

addTaskBtn.addEventListener('click', function() {
    const input = prompt('Enter task name');
    if (!input) return;

    let newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.setAttribute('draggable', 'true');
    newItem.innerHTML = input;

    attachDragEvents(newItem);

    todoBoard && todoBoard.appendChild(newItem);
});

// Initialize drag and drop for all initial items
const allItems = document.querySelectorAll('.item');
allItems.forEach((item) => attachDragEvents(item));

// Function to attach drag events to a board
function attachBoardEvents(board) {
    board.addEventListener('dragover', (e) => {
        e.preventDefault(); // This is crucial for drop to work
    });
    
    board.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggingItem = document.querySelector('.dragging');
        if (draggingItem) {
            board.appendChild(draggingItem);
        }
    });
}

// Initialize all existing boards
const allBoards = document.querySelectorAll('.board');
allBoards.forEach(board => attachBoardEvents(board));

// Function to handle form submission - FIXED
function handleFormSubmit(e) {
    e.preventDefault();
    
    const input = formInput.value;
    if (!input) return;
    
    // Hide the form
    formContainer.classList.remove("form-container");
    formContainer.classList.add("form-container-hidden");
    
    // Create new board
    const boardDiv = document.createElement('div');
    boardDiv.setAttribute("class", "board");
    boardDiv.innerHTML = "<h4>" + input + "</h4>";
    
    // Reset the input field
    formInput.value = "";
    
    // Insert new board before the add button
    boardContainer.insertBefore(boardDiv, addBoardBtn);
    
    // Attach drag and drop events to the new board
    attachBoardEvents(boardDiv);
}

// Set up the form submit event listener ONCE, outside the click handler
addtitleSubmit.addEventListener('click', handleFormSubmit);

// Adding new board - FIXED
addBoardBtn.addEventListener('click', function() {
    // Just show the form, don't add new event listeners
    formContainer.classList.remove("form-container-hidden");
    formContainer.classList.add("form-container");
});
