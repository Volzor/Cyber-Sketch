// variables
const container = document.getElementById('container');
const clearBtn = document.getElementById('clearBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const blackBtn = document.getElementById('blackBtn');
const colorArray = ['red', 'orange', 'yellow', 'green', 'blue', 'pink', 'purple'];



// creates re-sizeable grid
const createGrid = (size) => {
    container.style.display = 'grid';
    container.style.gridTemplate = `repeat(${size}, 1fr) / repeat(${size}, 1fr)`;
    container.style.border = '1px solid black';
    
    for (let i = 0; i < size*size; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-cells')
        container.style.height = '70vh';
        container.style.width = '50%';
        container.appendChild(div)
    };

};
createGrid(32);

// changes grid cell colors using mouseover effect
const changeColor = () => {
    const allCells = document.querySelectorAll('.grid-cells');
    allCells.forEach(cell => cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = 'black';
    }))
};
changeColor();

// clears the grid
const clearGrid = () => {
    const allCells = document.querySelectorAll('.grid-cells');
    allCells.forEach(cell => cell.style.backgroundColor = 'white');
};
clearGrid();

// grabs random color from array
const randomColor = () => {
    return Math.floor(Math.random() * colorArray.length)
};


// Produces a rainbow effect on mouseover using the randomColor function
const rainbowGrid = () => {
    const allCells = document.querySelectorAll('.grid-cells');
    allCells.forEach(cell => cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = colorArray[randomColor()];
    }));
};

// attaches event listener to 'rainbow' button
rainbowBtn.addEventListener('click', rainbowGrid);
clearBtn.addEventListener('click', clearGrid);
blackBtn.addEventListener('click', changeColor);
