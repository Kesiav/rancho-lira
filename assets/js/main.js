let hamburger = document.querySelector('.hamburger')
let menu = document.querySelector('.top-container nav')

hamburger.addEventListener('click', function(){
    menu.classList.toggle('show-nav')
})