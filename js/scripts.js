const htmlBody = document.querySelector('body');
const gridSection = document.createElement("section");
const sketchArea = document.createElement('div');

let gridRows = [];
let gridCells = [];
let rows = 16;
let columns = 16;


createGrid(16,16)
gridRows.forEach(element => sketchArea.appendChild(element));

gridSection.appendChild(sketchArea);
htmlBody.appendChild(gridSection);

function createGrid(rows, columns){
    let cellNum = 0;

    for (i = 0; i < rows; i++){
        gridRows[i] = document.createElement('div');
        for (j = 0; j < columns; j++){
            gridCells[cellNum] = document.createElement('div');
            gridRows[i].appendChild (gridCells[cellNum]);
            cellNum++;
        }
    }
}