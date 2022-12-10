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

//Utilize a click event to call another function that will
    //set the grid size to the user's liking
let sketchPad = document.querySelector('div.sketchPad');
const button = document.querySelector('button');
const body = document.querySelector('body');

formatBody();
producePrompt();
produceGrid();
addHover();

function formatBody(){
    let buttonContainer = document.createElement('div');
    buttonContainer.setAttribute('style', 'height: 200px; display: flex; align-items: center; justify-content: center');
    buttonContainer.appendChild(button);
    body.insertBefore(buttonContainer, sketchPad);

    button.setAttribute('style', 'height: 25px; width: 100px');

    body.setAttribute('style', 'display: flex; flex-direction: column; align-items: center');
}

function producePrompt(){
    button.addEventListener('click', ()=> {
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
        gridSquare.setAttribute('style', 'background-color: white; outline: 1px solid black');
        sketchPad.appendChild(gridSquare);
    }
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
    let gridSquares = document.querySelectorAll('div.gridSquare');

    gridSquares.forEach(gridSquare => {
        gridSquare.addEventListener('mouseover', ()=>{
            gridSquare.setAttribute('style', 'background-color: black');
        })
    })
}