const gridContainer = document.querySelector('.grid-container');
console.log(gridContainer)


const gridWidth = gridContainer.clientWidth
console.log(gridWidth)

// Calculate how many grid squares need to be created
const squaresInRow = 10
const squares = squaresInRow**2


// Create div elements with class grid in square
for (let i = 0; i <squares; i++) {
    const grid = document.createElement('div')
    grid.className='grid'
    grid.style.width = `${gridWidth/ (squaresInRow+.3)}px`;
    grid.style.height = `${gridWidth/ (squaresInRow+.3)}px`;
    console.log(grid.style.width)
    gridContainer.appendChild(grid);
}

// Select all grids

let gridAll = document.querySelectorAll('.grid');

// Put event listener on each item in gridAll
gridAll.forEach(item=>{
    // Mouse over event
    item.addEventListener('mouseover', obj=>{
        changeBackgroundRandom(obj);
    })

    // Mouse out event
    // item.addEventListener('mouseout', obj=> {
    //     changeBackgroundWhite(obj)
    //     console.log(obj)
    // })
})



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