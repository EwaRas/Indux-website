const burgerMenu = document.querySelector('.burgerMenu');
const nav = document.querySelector('.menu');

burgerMenu.addEventListener('click', function() {
    nav.classList.toggle('showMenu');
    burgerMenu.classList.toggle('burgerCross');
    nav.addEventListener('click', function() {
        nav.classList.remove('showMenu');
        burgerMenu.classList.remove('burgerCross');
    });
});

let productCards = Array.prototype.slice.call(document.querySelectorAll('.revealOnScroll'));
console.log(productCards);

let cardArr = [];


function getCardPosition() {
    let cardPos;
    productCards.forEach(function(card) {
        cardPos = Math.round(card.getBoundingClientRect().top + window.scrollY);
        cardArr.push(cardPos);
    });
};
getCardPosition();


window.addEventListener('scroll', function() {
    let docPos = (document.documentElement && document.documentElement.scrollTop) ||
        document.body.scrollTop;
    let scrollPosition = window.pageYOffset || document.documentElement.scrollTop || window.scrollY;
    let i;
    for (i = 0; i < productCards.length; i++) {
        let cardPos = Math.round(productCards[i].getBoundingClientRect().top + scrollPosition);
        if (cardPos - docPos < 600) {
            productCards[i].style.opacity = '1';
        }
    }
});