// Start function Owl carousel
$(document).ready(function(){
    $(".container-offers").owlCarousel({
        loop:true,
        rtl:true,
        nav:true,
        dots:false,
        margin:30,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                //nav:false,
                //autoplay:true
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
                loop:true
            }
        }
    });
});

$(document).ready(function(){
    $(".customers").owlCarousel({
        loop:true,
        rtl:true,
        dots:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:false,
                autoplay:true
            },
            600:{
                items:3,
                nav:true,
                margin:60
            },
            1000:{
                items:4,
                nav:true,
                loop:true,
                margin:10
            }
        }
    });
});

// Start change active on the number btn
const listNumPage = document.querySelector('.list-next-page');
const btnSpanList = document.querySelectorAll('.list-next-page .number');

btnSpanList.forEach(span => {
    //console.log(span);
    span.addEventListener('click', () => {
        btnSpanList.forEach(span => {
            span.classList.remove('active');
        });
        span.classList.add('active');
    });
});