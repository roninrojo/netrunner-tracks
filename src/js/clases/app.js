import {
    svgClick1,
    textClick1,
    clicksTrack,
    resetTracks,
    trackButtons,
    nav,
    runnerBtn,
    coorpBtn
} from "../selectors.js";

import {
    changeClick,
    resetTrack,
    buttonActions,
    showTab,
    chooseID
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
            nav.addEventListener('click', showTab);
            // track switcher
            clicksTrack.addEventListener('click', changeClick);
            // Button reset for all tracks
            resetTracks.forEach(item => item.addEventListener('click', resetTrack));
            // (+)(-) for all tracks
            trackButtons.forEach(item => item.addEventListener('click', buttonActions));
            // Player ID Configuration
            runnerBtn.addEventListener('click', chooseID);
            coorpBtn.addEventListener('click', chooseID);
        });
        
        switch (this.playerType) {
            case 'coorp':
                console.log(`se inicia como ${this.playerType}`);
                
                break;
            case 'runner':
                console.log(`se inicia como ${this.playerType}`);

            default:
                break;
        }
        // svgClick.classList.toggle("hide")
    }
}

export default App;