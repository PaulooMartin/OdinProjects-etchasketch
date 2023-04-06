const htmlBody = document.querySelector('body');

const sketchSection = document.querySelector(".sketch-section");

const sketchArea = document.querySelector('.sketch-area');

let gridRows = [];
let gridCells = [];
let rows = 16;
let columns = 16;


createGrid(rows,columns)

function createGrid(rows, columns){
    let cellNum = 0;

    for (i = 0; i < rows; i++){
        gridRows[i] = document.createElement('div');
        gridRows[i].className = "grid-row";

        for (j = 0; j < columns; j++){
            gridCells[cellNum] = document.createElement('div');
            gridCells[cellNum].className = "grid-cell";
            gridRows[i].appendChild (gridCells[cellNum]);
            cellNum++;
        }
    }

    gridRows.forEach(row => sketchArea.appendChild(row));
    gridCells.forEach(clickAddBgColor);
    sketchSection.appendChild(sketchArea);
}

function clickAddBgColor (cell) {
    cell.addEventListener('click', cellSetBG);
    return;
}

function hoverAddBgColor (cell) {
    cell.addEventListener('mouseover', cellSetBG);
    return;
}

function cellSetBG (){
    this.style.backgroundColor = randomRGB();
    return;
}

function randomRGB () {
    let rgbValue = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
    return rgbValue;
}

function switchToHover(){
    gridCells.forEach(cell => cell.removeEventListener('click', cellSetBG))
    gridCells.forEach(hoverAddBgColor);
    return;
}

function switchToClick(){
    gridCells.forEach(cell => cell.removeEventListener('mouseover', cellSetBG))
    gridCells.forEach(clickAddBgColor);
    return;
}

function resizeGrid(){
    do{
        rows = prompt('Number of rows: ');
        if (rows == null) return;
        rows = +rows;
    } while (isNaN(rows) || rows > 100 || rows <= 0)

    do{
        columns = prompt('Number of columns: ');
        if (columns == null) return;
        columns = +columns;
    } while (isNaN(columns) || columns > 100 || columns <= 0)

    // Removes previous grid
    while (sketchArea.firstChild) {
        sketchArea.removeChild(sketchArea.firstChild);
    }

    gridCells = [];
    gridRows = [];
    createGrid(rows, columns);
}

function clearGrid (){
    gridCells.forEach(cell => cell.style.backgroundColor = "");
}