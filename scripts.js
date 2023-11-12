// 16 * 16 = 256

function createGrid(gridSize = 256) {
    const container = document.getElementById("gridContainer");

    // clears existing nodes to allow for changes in grid size
    if (container.hasChildNodes()) {
        container.innerHTML = ''
    }

    // grid size 16 * 15 = 256
    for (let i = 0; i < gridSize; ++i) {
        let div = document.createElement("div");

        div.textContent = `|  |`;
        container.appendChild(div)
    }
}

function promptUserChangeSize() {

    const btn = document.querySelector("#changeSize");

    btn.addEventListener('click', () => {
        let newSizeNum = prompt("Enter a new grid size:");
        createGrid(newSizeNum * newSizeNum) // number needs to be a multiple of itself
    });
}

// function hoverEvent()
// on hover paint the div and keep it painted 
// for a short time after stopping the hover
// look at code from drum kit project


createGrid()
promptUserChangeSize()
