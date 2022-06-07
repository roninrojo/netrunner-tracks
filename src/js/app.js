// Selectors

const defaultClick = document.querySelector('span[data-number]');
const clicksTrack = document.querySelector(".tracks-clicks__row");
const clicks = document.querySelectorAll('span[data-number]');
const clicksTitle = document.querySelector(".tracks-clicks > .section-title")
const resteClicks = document.querySelector("#reset-clicks");

// Classes
const User = {
    type: '',
}

// Evenets
document.addEventListener('DOMContentLoaded', () => {
    clicksTrack.addEventListener('click', addClassSelected);
    resteClicks.addEventListener('click', resetClicks);
});

// Functions
const limpiarHTML = (nodo) => { while (nodo.firstChild) nodo.firstChild.remove() };

function addClassSelected(e) {
    
    const currentClick = e.target.closest('.click');
    
    if (currentClick != null) {
        const currentNumber = currentClick.dataset.number;  
        const arrClick = (Object.values(clicks)).filter(item => item.dataset.number != currentNumber);

        arrClick.forEach(item => {
            item.classList.remove('selected');
            const lastNumber = item.querySelector('.click-number');
            if (lastNumber) item.removeChild(lastNumber);
        });

        currentClick.classList.add('selected');
        const lastNumber = document.querySelector('.click-number');
        if (!lastNumber) {
            const numClick = document.createElement('span');
            numClick.classList.add('click-number');
            numClick.textContent = currentNumber;
            currentClick.appendChild(numClick);
        }
    } 
}   

function resetClicks(e) {
    clicks.forEach((click) => {
        const lastNumber = click.querySelector('.click-number');
        if (Number(click.dataset.number) === 1) {
            click.classList.add('selected');
            if (!lastNumber) {
                const numClick = document.createElement('span');
                numClick.classList.add('click-number');
                numClick.textContent = "1";
                click.appendChild(numClick);    
            }
            
        } else {
            click.classList.remove('selected');
            if (lastNumber) click.removeChild(lastNumber);
        } 
    })
}
