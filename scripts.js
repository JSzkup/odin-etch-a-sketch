// 16 * 16 = 256

function createGrid() {
    const container = document.getElementById("gridContainer");

    for (let i = 0; i < 256; ++i) {
        let div = document.createElement("div");

        div.textContent = ` TEST ${i + 1} `;
        container.appendChild(div)
    }
}


createGrid()
