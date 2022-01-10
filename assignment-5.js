//retrieve grid
const grid = document.querySelector(".mt-5.content");

//retrieve row and col data
const cols = document.querySelectorAll(".col-sm-auto.border.border-dark.box.white");
const rows = document.querySelectorAll(".row.justify-content-md-center");

// ●	add rows to the grid
//retrieve add row button
const addRow = document.querySelector(".btn.btn-dark.my-3.add-row");

addRow.addEventListener("click", () => {
    //create new row
    const newRow = document.createElement("div");
    newRow.classList.add("row");
    newRow.classList.add("justify-content-md-center");
    
    for(let i = 0; i < cols.length / rows.length; i++)
    {
        const newCol = document.createElement("div");
        newCol.classList.add("col-sm-auto");
        newCol.classList.add("border");
        newCol.classList.add("border-dark");
        newCol.classList.add("box");
        newCol.classList.add("white");
    
        newRow.appendChild(newCol);
    }

    grid.appendChild(newRow);
});

// ●	add columns to the grid

//retrive col btn
const addCol = document.querySelector(".btn.btn-dark.my-3.add-col");

addCol.addEventListener("click", () => {
    for(let i = 0; i < rows.length; i++)
    {
        const newCol = document.createElement("div");
        newCol.classList.add("col-sm-auto");
        newCol.classList.add("border");
        newCol.classList.add("border-dark");
        newCol.classList.add("box");
        newCol.classList.add("white");
    
        rows[i].appendChild(newCol);
    }
});



// ●	remove rows from the grid
const delRow = document.querySelector(".btn.btn-dark.my-3.del-row");

delRow.addEventListener("click", () => {
    grid.removeChild(grid.lastChild);
})


// ●	remove columns from the grid
const delCol = document.querySelector(".btn.btn-dark.my-3.del-col");

delCol.addEventListener("click", () => {
    for(let i = 0; i < rows.length; i++)
    {
        rows[i].removeChild(rows[i].lastChild);
    }
})

// ●	select a color from a dropdown menu of colors
// ●	click on a single cell, changing its color to the currently selected color
grid.addEventListener("click", (target) => {
    const option1 = document.getElementById("o1");


    if(option1.value == "red")
        target.target.style.background = 'red';
    if(option1.value == "blue")
        target.target.style.background = 'blue';
    if(option1.value == "green")
    target.target.style.background = 'green';
    
})

// ●	fill all uncolored cells with the currently selected color
//retrive box array
const boxArr = document.querySelectorAll(".box");

const whiteBtn =  document.getElementById("wBtn");
const option2 = document.getElementById("o2");

whiteBtn.addEventListener("click", () =>{
    boxArr.forEach( (box) => {
        if(box.style.background == "" || box.style.background == "null" )
            box.style.background = option2.value;
    })
})

// ●	fill all cells with the currently selected color
const fillAllBtn =  document.getElementById("fillAllBtn");
const option3 = document.getElementById("o3");
fillAllBtn.addEventListener("click", () =>{
    boxArr.forEach( (box) => {
            box.style.background = option3.value;
    })
})

// ●	clear all cells/restore all cells to their original/initial color

// ●	click and hold (mouseover) from a single cell (start) to a different cell (end) 
//      such that all affected/hovered-over cells from start to end change to the currently 
grid.addEventListener("drag", (target) => {
    const option4 = document.getElementById("o4");
    targer.target.style.background = option4.value;
})