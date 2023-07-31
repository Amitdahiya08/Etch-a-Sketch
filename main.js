let color ="black";
let click= false;
document.addEventListener("DOMContentLoaded", function(){
    CreateBoard(16);
    document.querySelector("body").addEventListener("click",function(e){
        if (e.target.tagName != "BUTTON"){
            click=!click;
        }
    })
     // Add event listener to the "Black" button
     const blackButton = document.querySelector('.black');
     blackButton.addEventListener('click', function() {
         setColor('black');
     });

     // Add event listener to the "Random" button
     const randomButton = document.querySelector('.random');
     randomButton.addEventListener('click', function() {
         setColor('random');
     });
      // Add event listener to the "Clear" button
      const clearButton = document.querySelector('.clear');
      clearButton.addEventListener('click', function() {
          clearColor();
      });
    //  Add event listener to the select size button
    let SelectButton = document.querySelector('#popup');
    SelectButton.addEventListener("click",function(){
        let size= getSize();
        CreateBoard(size);
    })
});
function CreateBoard(size) {
    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`; // Use backticks (``) here
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;    // Use backticks (``) here
    let numDivs = size * size;
    for(let i=0;i<numDivs;i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover",ColorDiv)
        board.insertAdjacentElement("beforeend",div);
    }
}
function ColorDiv(){
  if(click){
    if(color=="black"){
        this.style.backgroundColor= "black";
       }
       else if(color=="random"){
        this.style.backgroundColor= getRandomColor();
       }
  }
}
function getSize(){
    let input =prompt("Enter a Size between 1 to 50");
    let messageDiv= document.querySelector("#message");
    if(input>=1 && input<=50){
        messageDiv.innerHTML= "Lets Draw";
    }
    else {
        messageDiv.innerHTML = "Enter a Valid Number";
        return 16;
    }
    return input;
}
function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}
function setColor(choice){
    color=choice;
}
function clearColor(){
    let divs = document.querySelectorAll('div');
    divs.forEach( (div) => div.style.backgroundColor="white");
}
