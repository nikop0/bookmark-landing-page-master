let tabs = document.querySelectorAll('.single-feature');
let tabContent = document.querySelectorAll('.features-content');

const displayNoneAll = () => {
    tabContent.forEach(tabC => {
        tabC.style.display = 'none';
    });
    tabs.forEach(tab => {
        tab.classList.remove('clicked');
        tab.querySelector('.red-line').classList.remove('clicked');
    });
}

displayNoneAll();
tabContent[0].style.display = 'flex';
tabs[0].classList.add('clicked');
tabs[0].querySelector('.red-line').classList.add('clicked');


for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', e => {
        displayNoneAll();
        tabContent[i].style.display = 'flex';
        tabs[i].classList.add('clicked');
        tabs[i].querySelector('.red-line').classList.add('clicked');
    });
}