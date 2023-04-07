const htmlBody = document.querySelector('body');
const sketchSection = document.querySelector(".sketch-section");
const sketchArea = document.querySelector('.sketch-area');
const clearBtn = document.querySelector('.clear-btn');
const rainbowBtn = document.querySelector('.rainbow-mode');
const resizeBtn = document.querySelector('.resize-grid');
const palettes = document.querySelectorAll('.palette');

let gridRows = [];
let gridCells = [];
let rows = 16;
let columns = 16;


let currentColor = palettes[0].value;
let rainbowMode = false;
let clickMode = true;
let hoverMode = false;

createGrid(rows,columns);
colorPicker()
clearBtn.addEventListener('click', clearGrid);
rainbowBtn.addEventListener('click', () => rainbowMode === false ? rainbowMode = true : rainbowMode = false);
resizeBtn.addEventListener('click', resizeGrid);
switchModeKeyShortcut();

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

    hoverMode === true ? gridCells.forEach(hoverAddBgColor) : gridCells.forEach(clickAddBgColor);

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
    rainbowMode === true ? this.style.backgroundColor = randomRGB() : this.style.backgroundColor = currentColor;
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

function colorPicker(){
    palettes.forEach(picker => picker.addEventListener('click', () => currentColor = picker.value))

    palettes.forEach(picker => picker.addEventListener('change', () => currentColor = picker.value))
}

function switchModeKeyShortcut(){
    window.addEventListener('keyup', (e) => {
    if (e.key === 'g'){
        hoverMode = false;
        clickMode = true;
        switchToClick();
    } else if (e.key === 'h'){
        clickMode = false;
        hoverMode = true
        switchToHover();
    }
})
}