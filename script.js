const container = document.getElementById("container");

function makeGrid(rows, cols) {
    while (document.querySelector("button")) {
        document.querySelector("button").remove();
    };
    // to give the container row and col a default value
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  container.style.width = "960px";
  container.style.overflow = "hidden";
  // run a for loop to create the number of elements required to form the grid
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.style.minHeight = "0";
    cell.style.minWidth = "0";
    cell.style.overflow = "hidden";
    container.appendChild(cell).className = "grid-item";
    // append all the divs into the container
    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "black";
    })
  };
  resetButtonKey();
};

function resetButtonKey() {
    // creating a button to reset the grid
    const buttonDiv = document.querySelector("#button");
    const resetButton = document.createElement("button");
    resetButton.textContent = "Click here to reset the grid";
    resetButton.style.height = "40px";
    resetButton.style.width = "40px";
    buttonDiv.appendChild(resetButton);

    // adding an addeventlistener to prompt the user 
    // to input a value for what config of grid they want
    resetButton.addEventListener("click", () => {
        document.querySelectorAll(".grid-item").forEach(e => e.remove());
        let userGridInput = prompt("Please enter the grid configuration you want to work with: (max 100)");
        if (userGridInput > 100) {
            alert("ERROR! You have input an invalid number. Please choose a number from 1 to 100");
            return;
        } 
        rows = userGridInput;
        cols = userGridInput;
        makeGrid(rows, cols);
    })
};

makeGrid(20, 20);