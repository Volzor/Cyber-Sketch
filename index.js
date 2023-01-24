// variables from the HTML
const container = document.getElementById('container');
const clearBtn = document.getElementById('clearBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const blackBtn = document.getElementById('blackBtn');



// allows user to input a size for the grid, max of 100 x 100
const userInput = () => {
    const promptUser = prompt('Type in a grid size 4-100');
    if (promptUser > 100 || promptUser < 4) {
        return prompt('Please type in a number between 4 and 100');
    } else {
        return promptUser;
    };
};


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
createGrid(userInput());



// changes grid cell colors using mouseover effect
const changeColor = () => {
    const allCells = document.querySelectorAll('.grid-cells');
    allCells.forEach(cell => cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = 'black';
    }));
};
changeColor();


// clears the grid
const clearGrid = () => {
    const allCells = document.querySelectorAll('.grid-cells');
    allCells.forEach(cell => cell.style.backgroundColor = 'white');
};
clearGrid();


// Produces a rainbow effect on mouseover using the randomColor function
const rainbowGrid = () => {
    const allCells = document.querySelectorAll('.grid-cells');
    allCells.forEach(cell => cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
    }));
};


// random color generator
const randomColor = () => {
    let randomValue = Math.floor(Math.random() * 255);
    return randomValue;
};


// attaches event listener to 'rainbow' button
rainbowBtn.addEventListener('click', rainbowGrid);
clearBtn.addEventListener('click', clearGrid);
blackBtn.addEventListener('click', changeColor);
