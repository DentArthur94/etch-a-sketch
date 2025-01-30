"use strict"


initGrid();

const newGridBtn = document.querySelector("#new-grid-btn");

newGridBtn.addEventListener("click" , (gridSize) => {
    gridSize = getValidSize();
    removeGrid() ;
    createGrid(gridSize,gridSize);
    highlightCell();
    });




function initGrid() {
    let gridSize = 16;
    createGrid(gridSize,gridSize);
    highlightCell();
}

function createGrid(nbOfRows, nbOfColumns) {

    const gridContainer = document.querySelector("#grid-container");
    for (let i = 0 ; i < nbOfRows ; i++) {
        const row  = document.createElement("div");
        row.setAttribute("class", "row");
        gridContainer.appendChild(row);

        for (let j = 0 ; j < nbOfColumns ; j++) {
        const column = document.createElement("div");
        column.setAttribute("class", "column");
        row.append(column);
        }
    }
}

function removeGrid() {
    const rows = document.querySelectorAll(".row");
    rows.forEach( (row) => row.remove());
}



function highlightCell() {
    const cells = document.querySelectorAll(".column")

    cells.forEach( (cell) => {
        cell.addEventListener("mouseover", (event) => {
            let target = event.target ; 
            target.id = "target-div"; //allow to toggle the proper CSS properties on hover
        })
    } )
}


function getValidSize() {
    let userInput;
    
    while (true) { 
        userInput = prompt("What grid size do you want? (max : 64)");

        if (userInput === null) { 
            alert("Canceled"); 
            return 16;
        }

        userInput = Number(userInput); // Convertir la saisie en nombre

        if (!isNaN(userInput) && Number.isInteger(userInput) && userInput > 0 && userInput < 64) {
            return userInput; // Retourne le nombre valide
        } else {
            alert("Please enter a valid **integer** less than 64 !");
        }
    }
}