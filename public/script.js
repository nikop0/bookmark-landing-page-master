let tabs = document.querySelectorAll('.single-feature');
let tabContent = document.querySelectorAll('.features-content');
let questions = document.querySelectorAll('.single-question');
let navMenuMobile = document.querySelector('.nav-links');
let navMenuBtn = document.querySelector('.nav-buttn');

navMenuBtn.addEventListener('click', e => {
    if(!navMenuMobile.classList.contains('clicked')) {
            navMenuMobile.classList.add('clicked');
        } else {
            navMenuMobile.classList.remove('clicked');
        }
});

questions.forEach(question => {
    question.addEventListener('click', e => {
        let curAnswer = question.querySelector('.answer');
        let curImg = question.querySelector('.arrow-img')
        if(!curAnswer.classList.contains('clicked')) {
            curAnswer.classList.add('clicked');
            curImg.classList.add('clicked');
        } else {
            curAnswer.classList.remove('clicked');
            curImg.classList.remove('clicked');
        }
    });
});

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