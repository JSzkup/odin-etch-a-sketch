function createGrid(gridSize = 256) {
    const container = document.getElementById("gridContainer");

    // clears existing nodes to allow for changes in grid size
    if (container.hasChildNodes()) {
        container.innerHTML = ''
    }

    // grid size 16 * 16 = 256
    for (let i = 0; i < gridSize; ++i) {
        let div = document.createElement("div");

        div.textContent = ``;
        container.appendChild(div)
    }
}

function drawOnGrid() {
    const container = document.getElementById("gridContainer");
    const divs = container.querySelectorAll("div");

    let isMouseDown = false;

    // variable to check if mouse is held down
    container.addEventListener('mousedown', () => {
        isMouseDown = true;
    });

    // colors the div black when click is held and mouse is moved over
    container.addEventListener('mousemove', (event) => {
        if (isMouseDown) {
            const targetDiv = event.target; // Get the div element being hovered over
            if (targetDiv.nodeName === 'DIV') { // Check if the target is a div element
                targetDiv.style.backgroundColor = 'black';
            }
        }
    });

    // when mouse is no longer being held down, reset the flag
    container.addEventListener('mouseup', () => {
        isMouseDown = false;
    });

    // color div black when clicked on
    divs.forEach((div) => {
        div.addEventListener('click', () => {
            div.style.backgroundColor = 'black';
        });
    });

}

function promptUserChangeSize() {

    const btn = document.querySelector("#changeSize");

    btn.addEventListener('click', () => {
        let newSizeNum = prompt("Enter a new grid size:");

        if (newSizeNum > 100) {
            while (newSizeNum > 100) {
                newSizeNum = prompt("Enter a new grid size (Grid size must be less than 100):");
            }
        }
        createGrid(newSizeNum * newSizeNum) // number needs to be a multiple of itself
    });
}


createGrid()
drawOnGrid()
promptUserChangeSize()
