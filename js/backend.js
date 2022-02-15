setURL('http://gruppe-164.developerakademie.net/smallest_backend_ever');

async function saveInformations() {
    await backend.setItem('informations', JSON.stringify(informations));
}

async function init() {
    informations = '';
    taskBoard = '';
    await downloadFromServer();
    informations = JSON.parse(backend.getItem('informations')) || [];
    taskBoard = JSON.parse(backend.getItem('taskBoard')) || [];
}

async function deleteTask(i) {
    informations.splice([i], 1);
    await saveInformations();
}

async function saveTaskBoard() {
    await backend.setItem('taskBoard', JSON.stringify(taskBoard));
}

async function deleteTaskBoard(i) {
    taskBoard.splice([i], 1);
    await saveTaskBoard();
}