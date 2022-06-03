// Vars
const clicks = document.querySelector(".tracks-clicks");
const clicksTitle = document.querySelector(".tracks-clicks > .section-title")
console.log(clicksTitle);

// Evenets

document.addEventListener('DOMContentLoaded', () => {
    clicks.addEventListener('click', addClassSelected);
});

function addClassSelected(e) {
    
    const clicks = document.querySelectorAll('span[data-number]');
    

    clicks.forEach( click => click.classList.remove('selected'));
    
    e.target.classList.add('selected');
    
}
