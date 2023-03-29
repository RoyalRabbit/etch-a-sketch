const gridContainer = document.querySelector('.grid-container');
console.log(gridContainer)


const gridWidth = gridContainer.clientWidth
console.log(gridWidth)


const squaresInRow = 5
const squares = squaresInRow**2

for (let i = 0; i <squares; i++) {
    const grid = document.createElement('div')
    grid.className='grid'
    grid.style.width = `${gridWidth/ (squaresInRow+.3)}px`;
    grid.style.height = `${gridWidth/ (squaresInRow+.3)}px`;
    console.log(grid.style.width)
    gridContainer.appendChild(grid);
}

document.querySelector('.grid').addEventListener('mouseover',(obj)=>{
    obj.target.classList.add('hover');
    setTimeout(()=>{obj.target.classList.remove('hover');}, 300);
})