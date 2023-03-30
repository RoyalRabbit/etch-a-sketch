const gridContainer = document.querySelector('.grid-container');
console.log(gridContainer)

// Get width and length of the grid container
const gridWidth = gridContainer.clientWidth
const gridHeight = gridContainer.clientHeight


// Calculate how many grid squares need to be created
let squaresInRow = 20
let squares = squaresInRow**2

//Calculate dimensions of squares
let squareLength = (gridWidth) / (squaresInRow);

// Initialize Grid with 64x64 grid
createGrid(squares,squareLength)


// Create div elements with class grid in square
function createGrid(squares, squareLength){
    for (let i = 0; i <squares; i++) {
        const grid = document.createElement('div')
        grid.className='grid'


        // Set grid opacity property to 0
        grid.opacity=0

        // Add event listener to each grid that was created
        grid.addEventListener('mouseover', obj=>{
            changeBackgroundRandom(obj);
        })

        // Set width and height of the squares of each grid
        grid.style.width = `${squareLength}px`;
        grid.style.height = `${squareLength}px`;
        gridContainer.appendChild(grid);
}}




// Reset Button
const reset = document.querySelector('.reset');
reset.addEventListener('click', ()=> {
    // Select all grid elements
    const gridAll = document.querySelectorAll('.grid');
    gridAll.forEach(obj=>{
        // Sets background color to none and resets opacity
        obj.style.backgroundColor=''
        obj.opacity=0
        obj.style.opacity='1'
    })
})

// Row Generation button
const generateRow = document.querySelector('.change-row');
generateRow.addEventListener('click', ()=>{
    let squaresNumber = getValidNumber()

    // Calculate how many grid squares need to be created
    let squaresInRow = squaresNumber
    let squares = squaresInRow**2

    //Calculate dimensions of squares
    let squareLength = (gridWidth) / (squaresInRow);

    removeGrid();
    //Create grid
    createGrid(squares, squareLength)
    

    // createGrid(prompt('Type number of squares in row')) Finish at home. Probably need to add squarelenght and square sin a function to call from and have createGrid() just call for how many squares
})


// Set background color styling
function changeBackgroundRandom(obj) {
    obj.target.style.backgroundColor = createRandomColor();
    obj.target.style.opacity = '1'
    obj.target.style.transition = '0.4s ease-out';
    setTimeout(() => {
	    obj.target.style.backgroundColor = 'black';
        if (obj.target.opacity<1) {
           obj.target.opacity += 0.1
        }
	    obj.target.style.opacity = `${obj.target.opacity}`;
        obj.target.style.transition = '';
	  }, 400);


}

// Generates a random color styling
function createRandomColor() {
    return `rgb(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)})`
}

// Generates a random number from 0-max
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

// Remove grid
function removeGrid() {
    const gridAll = document.querySelectorAll('.grid'); 
    gridAll.forEach(obj=>{
        gridContainer.removeChild(obj)
        // console.log(obj)
    })
}

// Function that asks users for a valid number
function getValidNumber() {
    let num = NaN;
    while (isNaN(num) || num < 1 || num > 100) {
      num = Number(prompt("Enter number of squares (1-100) you want in a row"));
    }
    return num;
  }