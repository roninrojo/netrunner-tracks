import * as selector from "../selectors.js";

import {
    changeClick,
    resetTrack,
    resetClick,
    buttonActions,
    showTab,
    chooseID,
    showPlayerAid,
} from "../functions.js"

class App {
    constructor(playerType) {
        this.playerType = playerType;
        this.initApp();
    }
    initApp() {
        // Evenets
        document.addEventListener('DOMContentLoaded', () => {
            // Navigation Menu
            selector.nav.addEventListener('click', showTab);
            // track switcher
            selector.clicksTrack.addEventListener('click', changeClick);
            // Button reset for all tracks
            selector.resetTracks.forEach(item => item.addEventListener('click', resetTrack));
            // (+)(-) for all tracks
            selector.trackButtons.forEach(item => item.addEventListener('click', buttonActions));
            // Player ID Configuration
            selector.runnerBtn.addEventListener('click', chooseID);
            selector.coorpBtn.addEventListener('click', chooseID);
        });

        showPlayerAid(this.playerType);
        this.choose_ID(this.playerType);
    }
    
    choose_ID(playerType) {
        resetClick();

        switch (playerType) {
            case 'coorp':
                // Remove 1st click image
                selector.svgClick1.classList.add("hide");
                selector.textClick1.classList.remove("hide");
                const numClick1 = document.querySelector('[data-number="1"] .click-number');
                if (numClick1 !== null) numClick1.remove();

                // Show / hide correct tracks                
                selector.memoryTrack.classList.add("hide");
                selector.tagTrack.classList.add("hide");
                selector.damegeTrack.classList.add("hide");
                selector.publiTrack.classList.remove("hide");

                // CSS theme
                selector.bodyTag.classList.remove('runner-theme')
                selector.bodyTag.classList.add('coorp-theme')
                
                break;
            case 'runner':
                console.log('runner al mando!');
                
                // Fisrt Click
                selector.textClick1.classList.add("hide");
                selector.svgClick1.classList.add("hide");
                
                // Show / hide correct tracks
                selector.memoryTrack.classList.remove("hide");
                selector.tagTrack.classList.remove("hide");
                selector.damegeTrack.classList.remove("hide");
                selector.publiTrack.classList.add("hide");

                // Add 1 to first click
                // createNumber(selector.defaultClick, "1")
                
                // CSS theme
                selector.bodyTag.classList.remove('coorp-theme')
                selector.bodyTag.classList.add('runner-theme')
                
            default:
                break;
        }

        // Show correct player aid
        showPlayerAid(playerType);
    }
}

export default App;