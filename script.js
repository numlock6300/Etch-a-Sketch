let mainContainer = document.querySelector("#main-container");
let mainWidth = mainContainer.clientWidth;
let mainHeight = mainContainer.clientHeight;

// Default dimensons for grid
let maxRows = 16;
let maxColumns = 16;

// Size of the cells 
let colWidth = mainWidth / maxColumns;
let rowHeight = mainHeight / maxRows;

// Initialazing RGB values
let redIni = 0;
let greenIni = 0;
let blueIni = 0;

let mouseIsDown = false;

let resetButton = document.createElement("button");
resetButton.innerText = "Reset";
resetButton.classList.add("reset");


function createGrid(){
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
    mainContainer.appendChild(resetButton);
}

function changeColor(e){
    if(!mouseIsDown){return}
    if(getComputedStyle(e.target).backgroundColor !== cellDefaultColor)
    {
        console.log("down");
        //decrease brightnes by 10%;
        let rgbValues = ((e.target.style.backgroundColor).slice(4,-1)).split(",");
        let red = rgbValues[0] - redIni * 0.1;
        let green = rgbValues[1] - greenIni * 0.1;
        let blue = rgbValues[2] - blueIni * 0.1;
        e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        console.log(e.target.style.backgroundColor);
        return;
    }
    // assign random color
    redIni = Math.floor(Math.random()*255);
    greenIni = Math.floor(Math.random()*255);
    blueIni = Math.floor(Math.random()*255);
    e.target.style.backgroundColor = `rgb(${redIni}, ${greenIni}, ${blueIni})`;
    //console.dir(getComputedStyle(e.target).backgroundColor);
    
}

function colorGrid(e){
    console.log('colorGrid');
    if(mouseIsDown){
    let cells = Array.from(document.querySelectorAll(".column"));
    cells.forEach(cell => cell.addEventListener('mouseover', changeColor));
    }
}

function resetGrid(){
    let input = parseInt(prompt("Enter number of squares per side:"));
    let inputType = Number.isInteger(input);
    let check = true;
    while(check){
        if( (inputType) && (input > 0 && input <= 100)){
            maxRows = input;
            maxColumns = input;
            check = false;
        }
        else{
            input = parseInt(prompt("Enter number of squares per side:"));
            inputType = Number.isInteger(input);
            console.log(Number.isInteger(input));
        }
    }

     colWidth = mainWidth / input;
     rowHeight = mainHeight / input;

    mainContainer.innerHTML = "";
    createGrid();
    //colorGrid();
}

createGrid();
const cellDefaultColor = getComputedStyle(document.querySelector(".column")).backgroundColor; // gets value from css file

document.addEventListener('mousedown', function(){
    mouseIsDown = true;
    colorGrid();
});
document.addEventListener('mouseup', function(){
    mouseIsDown = false;
})

// Preventing drag efect when mouse is down
document.addEventListener('dragstart', function(e){
    e.preventDefault();
})

resetButton.addEventListener('click', resetGrid);

//colorGrid();
