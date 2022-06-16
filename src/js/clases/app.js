import {
    clicksTrack,
    resetTracks,
    trackButtons,
    nav,
    runnerBtn,
    coorpBtn
} from "../selectors.js";

import {
    addClassSelected,
    resetTrack,
    buttonActions,
    showTab,
    chooseID
} from "../functions.js"

class App {
    constructor() {
        this.initApp();
    }
    initApp() {
        // Evenets
        document.addEventListener('DOMContentLoaded', () => {
            // Navigation Menu
            nav.addEventListener('click', showTab);
            // track switcher
            clicksTrack.addEventListener('click', addClassSelected);
            // Button reset for all tracks
            resetTracks.forEach(item => item.addEventListener('click', resetTrack));
            // (+)(-) for all tracks
            trackButtons.forEach(item => item.addEventListener('click', buttonActions));
            // Player ID Configuration
            runnerBtn.addEventListener('click', chooseID);
            coorpBtn.addEventListener('click', chooseID);
        });
        
    }
}

export { App};