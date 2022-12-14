/* Understanding the problem:
    Phase 1:
    I need to create a program that creates a webpage with a 16x16 grid utilizing JavaScript 
    and DOM manipulation. A hover effect then needs to applied so that the grids change color
    when the mouse hovers over them leaving a pixelated trail.

    Phase 2:
    A button should be added onto the page that will send the user a popup asking for a new
    number of squares for the grid. This will replace the original 16x16 grid in the same 
    space as before (960px). The maximum should be 100 squares. 
*/

/* Plan:
Does your program have a user interface? What will it look like? What functionality will the interface have?
    The interface will be provided in a grid that displays the sketch pad with the number of desired squares
    also determined by the user. This will come in the form of a popup after pressing a button to initiate
    the popup.
What inputs will your program have? Will the user enter data or will you get input from somewhere else?
    The program will take in the number of squares (16x16 as default) requested by the user. This will
    be accomplished by a button at the top of the webpage with a popup that will request a number
    from the user to create a new grid. Then the program will track the mouse and it's path as it hovers 
    so the user will be able to sketch.
What's the desired input?
    Any number less than 100 and greater than 0 from the user.
Given your inputs, what are the steps necessary to return the desired output?
    I need to create a button that produces a popup. This popup then needs to prompt the user for a number
    greater than 1 and less than 100. From that, I need to create a few divs based on the user input 
    (default of 16x16). The divs then need to be added to the webpage and displayed in a grid inside of a 
    container. When the user hovers over the cells, the cells should change color and stay changed so the
    user can draw. To clear the sketchpad, the user will have hit the button that creates the popup prompt
    and enter a number of cells for the new sketchpad.
*/

const sketchPad = document.querySelector('div.sketchPad');
const sizeButton = document.querySelector('button.sizeButton');
const body = document.querySelector('body');
const clearButton = document.createElement('button');
clearButton.textContent = 'Clear';
let canceledOut = false;

formatBody();
generateSketchPad();
produceGrid();
clearSketchPad();
addHover();

//Create a series of flex containers to format the body
function formatBody(){
    const footer = document.querySelector('div.footer');

    const link = document.querySelector('a');
    link.setAttribute('style', 'color: black');

    const header = document.createElement('div');
    header.classList.add('header');
    header.setAttribute('style', `display: flex; justify-content: center; align-items: center; 
    height: 190px; font-family: "Courier New", monospace; font-size: 80px; color: gold`);
    header.textContent = 'Etch A Sketch';
    body.insertBefore(header, footer);

    const midContainer = document.createElement('div');
    midContainer.classList.add('midContainer');
    midContainer.setAttribute('style', 'width: 100%; display: flex; justify-content: center; gap: 20px');

    const sizeButtonContainer = document.createElement('div');
    sizeButtonContainer.classList.add('sizeButtonContainer');
    sizeButtonContainer.setAttribute('style', 'display: flex; align-items: flex-end; justify-content: center; gap: 20px');
    sizeButtonContainer.appendChild(sizeButton);

    const clearButtonContainer = document.createElement('div');
    clearButtonContainer.classList.add('clearButtonContainer');
    clearButtonContainer.setAttribute('style', 'display: flex; align-items: flex-end; justify-content: center; gap: 20px');

    clearButtonContainer.appendChild(clearButton);
    midContainer.appendChild(sizeButtonContainer);
    midContainer.appendChild(sketchPad);
    midContainer.appendChild(clearButtonContainer);
    body.insertBefore(midContainer, footer);

    sizeButton.setAttribute('style', 'border-radius: 50%; height: 100px; width: 100px');
    clearButton.classList.add('clearButton');
    clearButton.setAttribute('style', 'border-radius: 50%; height: 100px; width: 100px');

    body.setAttribute('style', 'margin: 0px; display: flex; flex-direction: column; align-items: center; background-color: red');
}

function generateSketchPad(){
    sizeButton.addEventListener('click', ()=> {
        let userGridSize = getUserInput();
        produceGrid(userGridSize);
        addHover();
    })
}

//Retrieve the user value and test to make sure it is a valid choice
function getUserInput(){

    do{
        userGridSize = prompt('Enter a number from 1-100 to adjust grid size:');

        if(userGridSize===null){
            userGridSize = 16;
            break;
        }
    }while(isNaN(userGridSize) || userGridSize>100 || userGridSize<1)

    return userGridSize;
}

//Apply the user's choice to create that many grid squares for the sketch pad
    //and apply them to the webpage
function produceGrid(userGridSize=16){
    emptyElement();

    formatSketchPad(userGridSize);

    for(let i=0; i<userGridSize*userGridSize; i++){
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('gridSquare');
        gridSquare.setAttribute('style', 'background-color: grey; outline: 1px solid black');
        sketchPad.appendChild(gridSquare);
    }
}

//Clear out the  sketchpad at the user's request
function clearSketchPad(){
    clearButton.addEventListener('click', ()=>{
        const gridSquares = document.querySelectorAll('div.gridSquare');

        gridSquares.forEach(gridSquare => {
            gridSquare.setAttribute('style', 'background-color: grey; outline: 1px solid black');
        })
    })
}

//Check if there are any elements in the sketch pad already
    //clears them if so
function emptyElement(){
    while(sketchPad.firstElementChild){
        sketchPad.firstElementChild.remove();
    }
}

//Format the sketchpad to display grid squares and provide borders between items
function formatSketchPad(userGridSize=16){
    sketchPad.setAttribute('style', `height: 550px; width: 550px; outline: 1px solid black; 
    display: grid; grid-template-rows: repeat(${userGridSize}, 1fr);
    grid-template-columns: repeat(${userGridSize}, 1fr)`);
}

//Utilize an event listener to know when a grid square has been hovered over
    //Change the state of the grid square to track the mouse movement
function addHover(){
    const gridSquares = document.querySelectorAll('div.gridSquare');

    gridSquares.forEach(gridSquare => {
        gridSquare.addEventListener('mouseover', ()=>{
            gridSquare.setAttribute('style', 'background-color: black');
        })
    })
}