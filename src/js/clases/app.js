import {
    svgClick1,
    textClick1,
    numClick1,
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
    chooseID,
    showPlayerAid
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
                svgClick1.remove();
                // numClick1.classList.toggle("hide"); // Esta en el html al inicio
                break;
            case 'runner':
                svgClick1.classList.toggle("hide");
                textClick1.classList.toggle("hide");
            default:
                break;
        }

        showPlayerAid(this.playerType);
        // svgClick.classList.toggle("hide")
    }
}

export default App;