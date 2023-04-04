const htmlBody = document.querySelector('body');
const gridSection = document.createElement("section");
const sketchArea = document.createElement('div');

let gridSquares = [];
let cell = [];

createGrid(16,16)
gridSquares.forEach(element => sketchArea.appendChild(element));

gridSection.appendChild(sketchArea);
htmlBody.appendChild(gridSection);

function createGrid(rows, columns){
    let cellNum = 0;

    for (i = 0; i < rows; i++){
        gridSquares[i] = document.createElement('div');
        for (j = 0; j < columns; j++){
            cell[cellNum] = document.createElement('div');
            gridSquares[i].appendChild (cell[cellNum]);
            cellNum++;
        }
    }
}