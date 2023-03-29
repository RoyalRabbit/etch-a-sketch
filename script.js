const gridContainer = document.querySelector('.grid-container');
console.log(gridContainer)


const gridWidth = gridContainer.clientWidth

// Calculate how many grid squares need to be created
const squaresInRow = 64
const squares = squaresInRow**2

//Calculate dimensions of squares
const squareLength = gridWidth / (squaresInRow + 0.3);


// Create div elements with class grid in square
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
}

// Select all grid elements
const gridAll = document.querySelectorAll('.grid');


// Reset Button
const reset = document.querySelector('.reset');
reset.addEventListener('click', ()=> {
    gridAll.forEach(obj=>{
        // Sets background color to none
        obj.style.backgroundColor=''
    })
})



// Set background color styling
function changeBackgroundRandom(obj) {
    obj.target.style.backgroundColor = createRandomColor()
}

// Generates a random color styling
function createRandomColor() {
    return `rgb(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)})`
}

// Generates a random number from 0-max
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
