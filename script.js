
// trebaš sredit grid funkcionalnost

const etchContainer = document.querySelector(".etch-container");


addEventListener("load", function createGrid() {
let i;
for (i=0; i<256; i++) {
    let gridDiv = document.createElement("div");
    gridDiv.classList.add ("grid");
    gridDiv.innerHTML ="halo"
    etchContainer.appendChild(gridDiv);
};


})

