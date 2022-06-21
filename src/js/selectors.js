// Clicks
export const defaultClick = document.querySelector("span[data-number]");
export const clicksTrack = document.querySelector(".tracks-clicks__row");
export const clicks = document.querySelectorAll("span[data-number]");
export const svgClick1 = document.querySelector('[data-number="1"] svg');
export const textClick1 = document.querySelector('[data-number="1"] .click-text');
// el ultimo número de click mostrado (solo puede haber 1)
export const lastNumber = document.querySelector('.click-number');
console.log(!lastNumber);

// Tracks
export const resetTracks = document.querySelectorAll(".button--reset");
export const trackButtons = document.querySelectorAll("[id$='-button']");
export const trackInputs = document.querySelectorAll("input[id$='-number']");

// ID
export const runnerBtn = document.querySelector(".choose-id__runner");
export const coorpBtn = document.querySelector(".choose-id__coorp");
export const bodyTag = document.querySelector("body");

//Menu
export const nav = document.querySelector(".menu");

