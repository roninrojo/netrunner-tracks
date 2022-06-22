// Selectors
import {
    svgClick1,
    textClick1,
    resetTracks,
    clicks,
    trackInputs,
    bodyTag,
    numClick1,
    playerAids
} from "./selectors.js";

import { player } from "./app.js";

// Functions
const limpiarHTML = (nodo) => { while (nodo.firstChild) nodo.firstChild.remove() };


// Add class 'selected' to a touched "click"
function changeClick(e) {
    
    const currentClick = e.target.closest('.click');
    
    if (currentClick !== null) {
        const currentNumber = Number(currentClick.dataset.number);
        
        // Filtro todos los click que no son el elegido
        const arrClick = (Object.values(clicks)).filter(item => item.dataset.number != currentNumber);
        

        // Los recorro, muestro el svg si había número lo borro
        // [][][1][X] <- x donde hacemos click
        arrClick.forEach(item => {
            item.classList.remove('selected');
            if(item.querySelector('svg') !== null) item.querySelector('svg').classList.remove('hide');
            const haveNumber = item.querySelector('.click-number');
            if (haveNumber !== null) item.removeChild(haveNumber);
        });

        currentClick.classList.add('selected');

        // 💡 Si el ID es coorp y current click = 1 click-number no se debería crear

        // Coompruebo que no hay numero, si no hay lo creo para ese Click
        // Si hacemos Click en el mismo si existe, no entra
        const lastNumberShowed = document.querySelector('.click-number');
        
        if (lastNumberShowed === null) {
            switch (player.type) {
                case 'coorp':
                    if (currentNumber !== 1) {
                        const numClick = document.createElement('span');
                        numClick.classList.add('click-number');
                        numClick.textContent = currentNumber;
                        currentClick.appendChild(numClick);
                        currentClick.querySelector("svg").classList.toggle("hide");
                    }
                    break;
            
                default:
                    break;
            }
            
            
            // if (player.type === 'coorp' && currentNumber !== 1) {
            // const numClick = document.createElement('span');
            // numClick.classList.add('click-number');
            // numClick.textContent = currentNumber;
            // currentClick.appendChild(numClick);
            //     currentClick.querySelector("svg").classList.toggle("hide");
            // }    
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
    const playerOption = e.currentTarget.dataset.option;
    player.changeType(playerOption);

    // Menuda tontada tener estos dos if iguales...
    if (player.type === 'runner') {
        textClick1.classList.toggle('hide');
        if (numClick1) numClick1.classList.toggle('hide');
        
    }
    
    if (player.type === 'coorp') {
        textClick1.classList.toggle('hide');
        if (numClick1) numClick1.classList.toggle('hide');
    }
    
    // trigger del menu tracks
    goToTracks();
    
    // Se muestra el playerAid
    showPlayerAid(player.type);

    // Swith CSS theme
    switch (player.type) {
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

function showPlayerAid(playerType) {
    let playerAidHide = null;
    let playerAidShow = null;

    playerAids.forEach( list => {
        (list.dataset.aid === playerType) ? playerAidShow = list : playerAidHide = list;
    });

    // Player Aid Show
    playerAidShow.classList.add("show");
    playerAidHide.classList.remove("show");
}

export {
    limpiarHTML,
    changeClick,
    resetTrack,
    resetClick,
    buttonActions,
    showTab,
    chooseID,
    showPlayerAid
}