const htmlBody = document.querySelector('body');
const gridSection = document.createElement("section");
const sketchArea = document.createElement('div');

let gridRows = [];
let gridCells = [];
let rows = 16;
let columns = 16;


createGrid(rows,columns)
gridRows.forEach(row => sketchArea.appendChild(row));
gridCells.forEach(clickAddBgColor);


sketchArea.className = "sketch-area"
gridSection.appendChild(sketchArea);
htmlBody.appendChild(gridSection);

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