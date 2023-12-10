document.addEventListener('DOMContentLoaded', function() {
    let menuBtn = document.querySelector('.burger-menu');
    let nav = document.querySelector('.nav');
    let navItem = document.querySelector('.nav-item')
    menuBtn.addEventListener('click', function(){
            menuBtn.classList.toggle('active');
            nav.classList.toggle('active');
            navItem.classList.toggle('active')
    });
});
