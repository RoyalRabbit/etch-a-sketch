const gridContainer = document.querySelector('.grid-container');
console.log(gridContainer)


const gridWidth = gridContainer.clientWidth
console.log(gridWidth)

// Calculate how many grid squares need to be created
const squaresInRow = 5
const squares = squaresInRow**2


// Create div elements with class grid in square
for (let i = 0; i <squares; i++) {
    const grid = document.createElement('div')
    grid.className='grid'
    grid.style.width = `${gridWidth/ (squaresInRow+.3)}px`;
    grid.style.height = `${gridWidth/ (squaresInRow+.3)}px`;
    grid.innerText = i;
    console.log(grid.style.width)
    gridContainer.appendChild(grid);
}

// Select all grids

let gridAll = document.querySelectorAll('.grid');

gridAll.forEach(item=>{
    addEventListener('mouseenter', obj=>{
        console.log(obj)
    })
})






function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }