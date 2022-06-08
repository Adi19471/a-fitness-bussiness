let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};


var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
    },
});

var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});



// card detailes 



var noti = document.querySelector('h1');
var select = document.querySelector('.select');
var button = document.getElementsByTagName('button');
for (var but of button) {
    but.addEventListener('click', (e) => {
        var add = Number(noti.getAttribute('data-count') || 0);
        noti.setAttribute('data-count', add + 1);
        noti.classList.add('zero')

        // image --animation to cart ---//
        var image = e.target.parentNode.querySelector('img');
        var span = e.target.parentNode.querySelector('span');
        var s_image = image.cloneNode(false);
        span.appendChild(s_image);
        span.classList.add("active");
        setTimeout(() => {
            span.classList.remove("active");
            span.removeChild(s_image);
        }, 500);


        // copy and paste //
        var parent = e.target.parentNode;
        var clone = parent.cloneNode(true);
        select.appendChild(clone);
        clone.lastElementChild.innerText = "Buy-now";

        if (clone) {
            noti.onclick = () => {
                select.classList.toggle('display');
            }
        }
    })
}



// image cursole slow motion Jquery Animation

$(document).ready(function() {
    function Bounce() {
        $("#myimg").animate({
            top: "100%",
            width: "100%"
        }, 1000, function() {
            $("#myimg").animate({
                top: "80%",
                width: "80%"
            }, 1000, Bounce)
        });
    }
    Bounce();
})