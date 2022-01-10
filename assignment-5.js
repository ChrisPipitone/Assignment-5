//make an event handler that takes an event and a function that all i have to do is create the different functions 
// and not a bunch of even handlers just events i think like for when the different buttons are pressed and when 
// the hover happens stuff like that  idk if its the best way to do it and the idea is sorta lost now till i 
// can actually work on it

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


