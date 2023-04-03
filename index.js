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

let typing = new Typed('.change-words',{
    strings : ['UI/UX Designer','Web Developer','Competitive Coder'],
    loop : true,
    typeSpeed : 90,
    backSpeed : 80,
    backDelay : 1500

})

function moreClicked() {
    var dot = document.getElementById("dot");
    var moreContent = document.getElementById("content-add");
    var btnDisplay = document.getElementById("clickMore");
  
    if (dot.style.display === "none") {
      dot.style.display = "inline";
      btnDisplay.innerHTML = "More...";
      moreContent.style.display = "none";
    } else {
      dot.style.display = "none";
      btnDisplay.innerHTML = "<i class='bx bx-chevron-up'></i>";
      moreContent.style.display = "inline";
    }
  }

  let audioArr = document.getElementsByTagName('audio');
  let proBox = document.querySelector('.project-box');

  proBox.addEventListener('mouseenter', () => {
    audioArr[1].volume = 0.4;
    audioArr[1].play();
  })

  let Nexus = document.querySelector('#Nexus');

  Nexus.addEventListener('mouseenter', () => {
    audioArr[1].volume = 0.4;
    audioArr[1].play();
  })

  let Artisane = document.querySelector('#Artisane');

  Artisane.addEventListener('mouseenter', () => {
    audioArr[1].volume = 0.4;
    audioArr[1].play();
  })