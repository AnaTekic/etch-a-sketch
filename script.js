
// trebaš sredit grid funkcionalnost

const etchContainer = document.querySelector(".etch-container");
const clear = document.getElementById("clear");
const changeSize = document.getElementById("size");
let gridDiv;


//create grid dynamically - default value 16x16
window.addEventListener("load", function createGrid() {
  let i;
  for (i=0; i<256; i++) {
    gridDiv = document.createElement("div");
    etchContainer.appendChild(gridDiv);
    gridDiv.innerHTML ="cat";
    
  };
});
    //prompt size question
  changeSize.addEventListener("click", function (){   
        gridDiv.classList.remove("color");
    let question = prompt ("How many squares per side would you like?", "16");
    
    //delete previously created divs
    while (etchContainer.firstChild) {
        etchContainer.removeChild(etchContainer.firstChild);
    };

//     //create new propmt divs
    etchContainer.style.gridTemplateColumns = `repeat(${question}, 1fr)`;
    etchContainer.style.gridTemplateRows = `repeat(${question}, 1fr)`;

  });
//etching via hovering
etchContainer.addEventListener('mouseover', function (e) {
    e.target.classList.add("color"); //NE ZNAM JEL RADI, BAŠ I NE, ODJEDNOM SE OBOJA SVE
});
  
//  clear grid 
   clear.addEventListener("click", function clear (){    
gridDiv.classList.remove("color");
     
  
});  