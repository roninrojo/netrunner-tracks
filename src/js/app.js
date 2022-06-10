// Selectors

// Clicks
const defaultClick = document.querySelector('span[data-number]');
const clicksTrack = document.querySelector(".tracks-clicks__row");
const clicks = document.querySelectorAll('span[data-number]');

// Tracks
const resetTracks = document.querySelectorAll(".button--reset");
const trackButtons = document.querySelectorAll("[id$='-button']");
const trackInputs = document.querySelectorAll("input[id$='-number']");

//Menu
const nav = document.querySelector(".menu");

// Evenets
document.addEventListener('DOMContentLoaded', () => {
    clicksTrack.addEventListener('click', addClassSelected);
    resetTracks.forEach(item => item.addEventListener('click', resetTrack));
    trackButtons.forEach(item => item.addEventListener('click', buttonActions));
    nav.addEventListener('click', showTab);
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

function resetTrack(e) {
    e.stopPropagation();
    resetTracks.forEach(item => {
        const inputId = item.id.split('-')[1];
        const elementId = e.target.id.split('-')[1];
        
        if (inputId === elementId) {
            const input = item.parentNode.querySelector(`#${inputId}-number`);
            if (input === null && (elementId === 'clicks')) {
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

function buttonActions(e) {
    
    trackInputs.forEach(input => {
        const elementId = e.target.id.split('-')[1];
        const action = e.target.id.split('-')[0];
        const inputId = input.id.split('-')[0];
        
        if (elementId === inputId) {
            
            //console.log(`${action} in ${inputId}`);
            
            switch (action) {
                case 'add':
                    input.value = Number(input.value) + 1
                    break;
                
                case 'substract':
                    let amount = Number(input.value) - 1;
                    (amount <= 0) ? amount = 0 : amount;
                    input.value = amount;
                    break
                default:
                    break;
            }
        }
    });
}

function showTab(e) {
    
    const btns = document.querySelectorAll('[data-menubtn]');
    const tabs = document.querySelectorAll('[data-tab]');
    const tab = document.querySelector(`[data-tab='${e.target.dataset.menubtn}'`)

    tabs.forEach( tab => tab.classList.remove('show'));
    btns.forEach( btn => btn.classList.remove('selected'));
    
    e.target.classList.add('selected');
    tab.classList.add('show');
    
}
