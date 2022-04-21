let mainContainer = document.querySelector("#main-container");
let mainWidth = mainContainer.clientWidth;
let mainHeight = mainContainer.clientHeight;
console.log(mainContainer.style)

const maxRows = 16;
const maxColumns = 16;

let colWidth = mainWidth / maxColumns;
let rowHeight = mainHeight / maxRows;

for (let i = 1; i <= maxRows; i++){
    let row = document.createElement("div");
    row.style.height = `${rowHeight}px`;
    row.classList.add("row");
    for (let j = 1; j <=maxColumns; j++){
        let column = document.createElement("div");
        column.style.width = `${colWidth}px`;
        column.classList.add("column");
        row.appendChild(column); 
    }
    mainContainer.appendChild(row);
}

function changeColor(e){
    e.target.style.backgroundColor = "red";
    console.log("hi");
}

mainContainer.addEventListener('mouseover', changeColor);