// Selectors
import {
    resetTracks,
    clicks,
    trackInputs,
    bodyTag
} from "./selectors.js";

// Functions
const limpiarHTML = (nodo) => { while (nodo.firstChild) nodo.firstChild.remove() };


// Add class 'selected' to a touched "click"
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

        // Si el ID es coorp y current click = 1 click-number no se debería crear
        const lastNumber = document.querySelector('.click-number');
        if (!lastNumber) {
            const numClick = document.createElement('span');
            numClick.classList.add('click-number','show');
            numClick.textContent = currentNumber;
            currentClick.appendChild(numClick);
        }
    } 
}   

// Reset Button
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

// Reset Button in "click" track
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

// Add (+) / Substract (-) button
function buttonActions(e) {
    trackInputs.forEach(input => {
        const elementId = e.target.id.split('-')[1];
        const action = e.target.id.split('-')[0];
        const inputId = input.id.split('-')[0];
        
        if (elementId === inputId) {
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

// Navigation Menu
function showTab(e) {
    
    const btns = document.querySelectorAll('[data-menubtn]');
    const tabs = document.querySelectorAll('[data-tab]');
    const tab = document.querySelector(`[data-tab='${e.target.dataset.menubtn}'`)

    if(tab != null) {
        tabs.forEach( tab => tab.classList.remove('show'));
        btns.forEach( btn => btn.classList.remove('selected'));
        
        e.target.classList.add('selected');
        tab.classList.add('show');
    }
    
}

// ID player selection
function chooseID(e) {
    const playerOptopn = e.currentTarget.dataset.option;
    const playerAids = document.querySelectorAll("[data-aid]");
    
    // trigger del menu tracks
    goToTracks();

    // const click1 = document.querySelector('.click[data-number="1"]');
    
    let playerAidHide = null;
    let playerAidShow = null;

    playerAids.forEach( list => {
        (list.dataset.aid === playerOptopn) ? playerAidShow = list : playerAidHide = list;
    });
    
    // Player Aid Show
    playerAidShow.classList.add("show");
    playerAidHide.classList.remove("show");

    // Swith CSS theme
    switch (playerOptopn) {
        case 'runner':
            bodyTag.classList.remove('coorp-theme')
            bodyTag.classList.add('runner-theme')
            break;
        
        case 'coorp':
            bodyTag.classList.remove('runner-theme')
            bodyTag.classList.add('coorp-theme')
            break;
    
        default:
            break;
    }
}

export {
    limpiarHTML,
    addClassSelected,
    resetTrack,
    resetClick,
    buttonActions,
    showTab,
    chooseID
}

// Tracks Menu Button Trigger
function goToTracks() {
  const event = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true
  });
  const element = document.querySelector("[data-menubtn='2']");
  element.dispatchEvent(event);
}