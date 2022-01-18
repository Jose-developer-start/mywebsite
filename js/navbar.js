const navbarScroll = document.querySelector('.navbar');

window.addEventListener('scroll', ()=>{
    navbarScroll.classList.toggle('scroll',scrollY > 0);
})