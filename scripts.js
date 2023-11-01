// 16 * 16 = 256

function createGrid() {
    const container = document.getElementById("gridContainer");

    for (let i = 0; i < 256; ++i) {
        let div = document.createElement("div");

        div.textContent = `TEST`;
        container.appendChild(div)
    }
}

function promptUserChangeSize() {

    const btn = document.querySelector("#changeSize");

    btn.addEventListener('click', () => {
        prompt("Enter a new grid size:")
    });

}

// function hoverEvent()
// on hover paint the div and keep it painted 
// for a short time after stopping the hover
// look at code from drum kit project


createGrid()
promptUserChangeSize()
