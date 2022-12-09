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

//Utilize a button to produce a popup prompt
producePrompt();

function producePrompt(){
    const button = document.querySelector('button');

    button.addEventListener('click', ()=> {
        let userGridSize = prompt('Enter a number from 1-100 to adjust grid size:');
    })
}

//Test that value is a number and is greater than 1 but less than 100

//Continue to prompt the user until a valid choice is given

//Apply the choice to the grid

//Create a grid of divs for the sketchpad (default of 16x16)

//Format the divs to be a grid

//Add the grid to the webpage

//Utilize the hover property of the mouse to track movement

//If a grid has been hovered over, change it's style to show
    //a trace of the mouse's path