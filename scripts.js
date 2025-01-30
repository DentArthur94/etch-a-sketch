"use strict"

const grid = document.querySelector("#grid");
createGrid(16,16);
highlightCell();



function createGrid(nbOfRows, nbOfColumns) {
    for (let i = 0 ; i < nbOfRows ; i++) {
        const row  = document.createElement("div");
        row.setAttribute("class", "row");
        grid.appendChild(row);

        for (let j = 0 ; j < nbOfColumns ; j++) {
        const column = document.createElement("div");
        column.setAttribute("class", "column");
        row.append(column);
        }
    }
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
