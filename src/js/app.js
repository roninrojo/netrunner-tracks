// Selectors

// Clicks
const defaultClick = document.querySelector('span[data-number]');
const clicksTrack = document.querySelector(".tracks-clicks__row");
const clicks = document.querySelectorAll('span[data-number]');
const clicksTitle = document.querySelector(".tracks-clicks > .section-title")
const resetClicks = document.querySelector("#reset-clicks");

// Tracks
const addCreditTrigger = document.querySelector("#add-credit-button");
const substractCreditTrigger = document.querySelector("#substract-credit-button");

const addMemoryTrigger = document.querySelector("#add-memory-button");
const substractMemoryTrigger = document.querySelector("#substract-memory-button");

const addTagTrigger = document.querySelector("#add-tag-button");
const substractTagTrigger = document.querySelector("#substract-tag-button");

const creditsTarget = document.querySelector("#credits-number");
const memoryTarget = document.querySelector("#memory-number");
const tagsTarget = document.querySelector("#tags-number");

const resetTracks = document.querySelectorAll(".button--reset");





// Classes

class Button {
    constructor(target) {
        this.target = target;
    }

    add() {
        this.target.value = Number(this.target.value) + 1;
    }
    
    sub() {
        let amount = Number(this.target.value) - 1;
        (amount <= 0) ? amount = 0 : amount;
        this.target.value = amount;
    }
}

const creditsBtn = new Button(creditsTarget);
const memoryBtn = new Button(memoryTarget);
const tagsBtn = new Button(memoryTarget);

// Evenets
document.addEventListener('DOMContentLoaded', () => {
    clicksTrack.addEventListener('click', addClassSelected);
    // resetClicks.addEventListener('click', resetClick);
    
    resetTracks.forEach(item => {
        item.addEventListener('click', resetTrack)
    })

    addCreditTrigger.addEventListener('click', () => buttonActions(creditsBtn, 'add'));
    substractCreditTrigger.addEventListener('click', () => buttonActions(creditsBtn, 'sub'));

    addMemoryTrigger.addEventListener('click', () => buttonActions(memoryBtn, 'add'));
    substractMemoryTrigger.addEventListener('click', () => buttonActions(memoryBtn, 'sub'));

    // addTagsTrigger.addEventListener('click', () => buttonActions(tagsBtn, 'add'));
    // substractTagsTrigger.addEventListener('click', () => buttonActions(tagsBtn, 'sub'));

    // addCreditTrigger.addEventListener('click', addCredits);
    // substractCreditTrigger.addEventListener('click', subtractCredits);
});

function buttonActions(button, action) {
    if(action === 'add') button.add();
    if(action === 'sub') button.sub();
}

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

function resetTrack(e) {
    e.stopPropagation();
    resetTracks.forEach(item => {
        const inputId = item.id.split('-');
        const elementId = e.target.id.split('-');
        
        if (inputId[1] === elementId[1]) {
            const input = item.parentNode.querySelector(`#${inputId[1]}-number`);
            if (input === null && (elementId[1] === 'clicks')) {
                resetClick();
            } else {
                input.value = 0;
            }
        }
    })
}
function resetClick() {
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

// Credits

// function addCredits() {
//     const credits = Number(addCreditTarget.value) + 1;
//     addCreditTarget.value = credits;
// }

// function subtractCredits() {
//     const credits = Number(addCreditTarget.value) - 1;
//     addCreditTarget.value = credits;
// }
