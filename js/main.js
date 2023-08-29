let header = document.querySelector(".header");
let windowHeight = this.innerHeight / 2;
let btnScrollUp = document.querySelector(".scrollUp");

// Scroll
window.onscroll = function () {

    if (this.scrollY >= windowHeight) {

        btnScrollUp.classList.add("show");

    } else {

        btnScrollUp.classList.remove("show");
    };

    btnScrollUp.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
};