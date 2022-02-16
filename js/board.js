
let toDo;
let inProgress;
let testing;
let done;
let currentElement;

async function loadTaskBoard() {
    await init();
    includeHTML();
    updateHTML();
}

function updateHTML() {
    toDo = taskBoard.filter(t => t['status'] == 'toDo');

    document.getElementById('toDo').innerHTML = '';

    for (let i = 0; i < toDo.length; i++) {
        const element = toDo[i];
        
        document.getElementById('toDo').innerHTML += fillOpenHTML(element);
    }

    inProgress = taskBoard.filter(t => t['status'] == 'inProgress');

    document.getElementById('inProgress').innerHTML = '';

    for (let i = 0; i < inProgress.length; i++) {
        const element = inProgress[i];
        document.getElementById('inProgress').innerHTML += fillCloseHTML(element);
    }

    testing = taskBoard.filter(t => t['status'] == 'testing');

    document.getElementById('testing').innerHTML = '';

    for (let i = 0; i < testing.length; i++) {
        const element = testing[i];
        document.getElementById('testing').innerHTML += fillCloseHTML(element);
    }

    done = taskBoard.filter(t => t['status'] == 'done');

    document.getElementById('done').innerHTML = '';

    for (let i = 0; i < done.length; i++) {
        const element = done[i];
        document.getElementById('done').innerHTML += fillCloseHTML(element);
    }
}

function startDragging(id) {
    currentElement = id;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(status) {
    taskBoard[currentElement]['status'] = status;
    updateHTML();
}

function fillOpenHTML(element) {
    return `<div draggable="true" ondragstart="startDragging(${element['id']})" class="board-element"><p>${element['date']}</p><p>${element['title']}</p><p>${element['description']}</p><p>${element['category']}</p></div>`
}

function fillCloseHTML(element) {
    return `<div draggable="true" ondragstart="startDragging(${element['id']})" class="board-element"><p>${element['date']}</p><p>${element['title']}</p><p>${element['description']}</p><p>${element['category']}</p></div>`
}