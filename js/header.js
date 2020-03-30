(function(){
    const nav = document.querySelector("header nav");
    const openIcon = document.querySelector("header .js-open-icon");
    const closeIcon = document.querySelector("header .js-close-icon");
    const navToggle = document.querySelector('header .js-nav-toggle');

    navToggle.addEventListener("click", ()=>{
        nav.classList.toggle("sr-only");
        openIcon.classList.toggle("hidden");
        closeIcon.classList.toggle("hidden");
    })
})()