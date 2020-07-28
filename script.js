
const etchContainer = document.querySelector(".etch-container");
const clear = document.getElementById("clear");
const changeSize = document.getElementById("size");
const colors = document.getElementById("colors");
let gridDiv;
const gameContainer = document.querySelector(".game-container")


//create grid dynamically - default value 16x16
window.addEventListener("load", function createGrid() {
  let i;
  for (i=0; i<16*16; i++) {
    gridDiv = document.createElement("div");
    etchContainer.appendChild(gridDiv);
    etchContainer.setAttribute('style', `grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16, 1fr);`);    
  };
});

//prompt size question
changeSize.addEventListener("click", function (){  
        
    //delete previously created divs
      while (etchContainer.firstChild) {
        etchContainer.removeChild(etchContainer.firstChild);
     };
      
     
     //create new propmt divs
   let question;
    //run check until input is number higher than 0
   while (true) {
    question = prompt("How many squares per side would you like?", "16");
    question = Math.round(question);
    if (!isNaN(question) && question >0 ) {
        break;
    }
    alert("please input number above 1");
}

      for (let i = 0; i < question*question; i++) {
        gridDiv = document.createElement('div');
        gridDiv.classList.add('gridBox');
        etchContainer.appendChild(gridDiv);
        etchContainer.setAttribute('style', `grid-template-columns: repeat(${question}, 1fr); grid-template-rows:          repeat(${question}, 1fr);`);
     }
     });

//etching via hovering
    etchContainer.addEventListener('mouseover', function (e) {
    e.target.style.backgroundColor ="red";
 
    });

 
    
    
//  clear grid
   clear.addEventListener("click", function (e){        
    let childNodesArray = etchContainer.children;
  
    for (var i = 0; i < childNodesArray.length; i++){
    childNodesArray[i].style.backgroundColor ="white";
     };

         gameContainer.classList.add("apply-shake");
     
 
 gameContainer.addEventListener("animationend", function (e) {
     gameContainer.classList.remove("apply-shake");
 });
 
     });  



//get random color

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
  };

//click color change
let clickCounter =0;
colors.addEventListener("click", function(e) {
  clickCounter +=1;
 
  if(clickCounter % 2 == 1) {
  colors.innerHTML ="go monocolor";
  etchContainer.addEventListener('mouseover', function (e) {
    e.target.style.backgroundColor = getRandomColor();
   });
  }
  else {
    colors.innerHTML ="get color crazy";
    etchContainer.addEventListener('mouseover', function (e) {
    e.target.style.backgroundColor = "red";
    });
  }
});
