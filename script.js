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
    grid.addEventListener('mouseover', obj=>{
        changeBackgroundRandom(obj);
    })
    grid.style.width = `${squareLength}px`;
    grid.style.height = `${squareLength}px`;
    gridContainer.appendChild(grid);
}

// Select all grids

// let gridAll = document.querySelectorAll('.grid');

// // Put event listener on each item in gridAll
// gridAll.forEach(item=>{
//     // Mouse over event
//     item.addEventListener('mouseover', obj=>{
//         changeBackgroundRandom(obj);
//     })

    // Mouse out event
    // item.addEventListener('mouseout', obj=> {
    //     changeBackgroundWhite(obj)
    //     console.log(obj)
    // })
// })



// Set background color styling
function changeBackgroundRandom(obj) {
    obj.target.style.backgroundColor = createRandomColor()
}

// Reset background color styling to white
function changeBackgroundWhite(obj) {
    obj.target.style.backgroundColor = ''
}
// Generates a random color styling
function createRandomColor() {
    return `rgb(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)})`
}

// Generates a random number from 0-max
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }