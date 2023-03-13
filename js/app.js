const scrollTop = document.querySelector(".backtoTop");
const toggleBtn = document.getElementsByClassName("toggle-btn")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    toggleBtn.classList.toggle('active');

    
})

document.querySelectorAll(".navbar-links").forEach(n => n.addEventListener('click', () =>{
    navbarLinks.classList.toggle('active');
    toggleBtn.classList.toggle('active');
}));

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 200) {
        scrollTop.classList.add("active");
    }else {
        scrollTop.classList.remove("active");
    }
})

