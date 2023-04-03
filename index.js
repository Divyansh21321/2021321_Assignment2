// js
let navdiv = document.querySelectorAll('section');

let navA = document.querySelectorAll('header nav a');
window.onscroll = () => {

    navdiv.forEach(section => {
        let id = section.getAttribute('id');
        if (window.scrollY >= (section.offsetTop - 150) && window.scrollY < ((section.offsetTop - 150) + section.offsetHeight)) {
            navA.forEach(link => {

                link.classList.remove('on-page');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('on-page');

            })
        }
    })
    navMenu.classList.remove('off');
    menuButton.classList.remove('bx-x-circle');
}

let navMenu = document.querySelector('.navigation-menu');
let menuButton = document.querySelector('#menu-begin');

menuButton.addEventListener('click',function(){
    menuButton.classList.toggle('bx-x-circle');
    navMenu.classList.toggle('off');
})

