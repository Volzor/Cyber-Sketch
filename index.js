// variables
const container = document.getElementById('container');


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
    }

};
createGrid(64);

const eventHandler = () => {
    const allCells = document.querySelectorAll('.grid-cells');
    allCells.forEach(cell => cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = 'blue';
    }))
};
eventHandler();
