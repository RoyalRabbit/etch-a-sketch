const gridContainer = document.querySelector('.grid-container');
console.log(gridContainer)


const gridWidth = gridContainer.clientWidth

// Calculate how many grid squares need to be created
let squaresInRow = 5
let squares = squaresInRow**2

//Calculate dimensions of squares
const squareLength = gridWidth / (squaresInRow + 0.3);

// Initialize Grid with 64x64 grid
createGrid(squares,squareLength)


// Create div elements with class grid in square
function createGrid(squares, squareLength){
    for (let i = 0; i <squares; i++) {
        const grid = document.createElement('div')
        grid.className='grid'
        

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
        // Sets background color to none
        obj.style.backgroundColor=''
    })
})

// Row Generation button
const generateRow = document.querySelector('.change-row');
generateRow.addEventListener('click', ()=>{
    removeGrid();
    // createGrid(prompt('Type number of squares in row')) Finish at home. Probably need to add squarelenght and square sin a function to call from and have createGrid() just call for how many squares
})


// Set background color styling
function changeBackgroundRandom(obj) {
    obj.target.style.backgroundColor = createRandomColor();
    obj.target.style.transition = 'background-color 0.5s ease-in-out';


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

